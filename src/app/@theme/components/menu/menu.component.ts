import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Router, UrlSerializer, NavigationEnd } from '@angular/router';

export abstract class NgxMenuItem {
  title: string;
  titleGetter?: (item: NgxMenuItem) => string;
  link?: string;
  linkGetter?: (item: NgxMenuItem) => string;
  url?: string;
  urlGetter?: (item: NgxMenuItem) => string;
  expanded?: boolean;
  active?: boolean;
  activeFn?: (item: NgxMenuItem) => boolean;
  target?: '_blank' | '_self' | '_parent' | '_top' | string;
  hidden?: boolean;
  hiddenFn?: (item: NgxMenuItem) => boolean;
  icon?: string;
  iconGetter?: (item: NgxMenuItem) => string;
  children?: NgxMenuItem[];
  parent?: NgxMenuItem;
  exact?: boolean;
  fragment?: string;
  fragmentGetter?: (item: NgxMenuItem) => string;
}

@Component({
  selector: 'ngx-menu-item',
  template: `
    <a *ngIf="item.link && !item.url && !item.children"
      [class.active]="item.active"
      [routerLink]="item.linkGetter && item.linkGetter(item) || item.link"
      [fragment]="item.fragmentGetter && item.fragmentGetter(item) || item.fragment"
      [attr.target]="item.target"
      [attr.title]="item.titleGetter && item.titleGetter(item) || item.title"
      (mouseenter)="onHoverItem(item)"
      (click)="onSelectItem(item)"
      class="menu-nav-link">
      <i *ngIf="item.icon" class="material-icons menu-icon">
        {{ item.iconGetter && item.iconGetter(item) || item.icon }}</i>
      <span class="menu-title">{{ item.titleGetter && item.titleGetter(item) || item.title }}</span>
    </a>
    <a *ngIf="item.url && !item.link && !item.children"
      [class.active]="item.active"
      [attr.href]="item.urlGetter && item.urlGetter(item) || item.url"
      [attr.target]="item.target"
      [attr.title]="item.titleGetter && item.titleGetter(item) || item.title"
      (mouseenter)="onHoverItem(item)"
      (click)="onSelectItem(item)"
      class="menu-nav-link">
      <i *ngIf="item.icon" class="material-icons menu-icon">
        {{ item.iconGetter && item.iconGetter(item) || item.icon }}</i>
      <span class="menu-title">{{ item.titleGetter && item.titleGetter(item) || item.title }}</span>
    </a>
    <a *ngIf="!item.link && !item.url && !item.children"
      [class.active]="item.active"
      [attr.title]="item.titleGetter && item.titleGetter(item) || item.title"
      (mouseenter)="onHoverItem(item)"
      (click)="$event.preventDefault();onClickItem(item)"
      class="menu-nav-link menu-header">
      <i *ngIf="item.icon" class="material-icons menu-icon">
        {{ item.iconGetter && item.iconGetter(item) || item.icon }}</i>
      <span class="menu-title">{{ item.titleGetter && item.titleGetter(item) || item.title }}</span>
    </a>
    <a *ngIf="item.children"
      [class.active]="item.active"
      [attr.title]="item.titleGetter && item.titleGetter(item) || item.title"
      (mouseenter)="onHoverItem(item)"
      (click)="$event.preventDefault();onToggleSubMenu(item)"
      class="menu-nav-link">
      <i *ngIf="item.icon" class="material-icons menu-icon">{{ item.icon }}</i>
      <span class="menu-title">{{ item.titleGetter && item.titleGetter(item) || item.title }}</span>
      <i class="chevron-icon" [class.nb-arrow-left]="!item.expanded" [class.nb-arrow-down]="item.expanded"></i>
    </a>
    <mat-nav-list *ngIf="item.children">
      <ngx-menu-items
        [items]="item.children"
        [autoCollapse]="autoCollapse"
        (hoverItem)="onHoverItem($event)"
        (toggleSubMenu)="onToggleSubMenu($event)"
        (selectItem)="onSelectItem($event)"
        (clickItem)="onClickItem($event)">
      </ngx-menu-items>
    </mat-nav-list>
  `,
})
export class NgxMenuItemComponent {
  @Input() item: NgxMenuItem;
  @Input() autoCollapse: boolean;

  @Output() hoverItem = new EventEmitter<NgxMenuItem>();
  @Output() toggleSubMenu = new EventEmitter<NgxMenuItem>();
  @Output() selectItem = new EventEmitter<NgxMenuItem>();
  @Output() clickItem = new EventEmitter<NgxMenuItem>();

  onHoverItem(item: NgxMenuItem) {
    this.hoverItem.emit(item);
  }

  onToggleSubMenu(item: NgxMenuItem) {
    this.toggleSubMenu.emit(item);
  }

  onSelectItem(item: NgxMenuItem) {
    this.selectItem.emit(item);
  }

  onClickItem(item: NgxMenuItem) {
    this.clickItem.emit(item);
  }
}

@Component({
  selector: 'ngx-menu-items',
  template: `
    <ng-container *ngFor="let i of items; trackBy: trackByFn">
      <mat-list-item class="menu-item"
        *ngIf="!(i.hiddenFn && i.hiddenFn(i) || i.hidden)"
        [class.expanded]="i.expanded"
        [class.collapsed]="!i.expanded">
        <ngx-menu-item
          [item]="i"
          [autoCollapse]="autoCollapse"
          (hoverItem)="onHoverItem($event)"
          (toggleSubMenu)="onToggleSubMenu($event)"
          (selectItem)="onSelectItem($event)"
          (clickItem)="onClickItem($event)">
        </ngx-menu-item>
      </mat-list-item>
    </ng-container>
  `,
})
export class NgxMenuItemsComponent {
  @Input() items: NgxMenuItem[];
  @Input() autoCollapse: boolean;

  @Output() hoverItem = new EventEmitter<NgxMenuItem>();
  @Output() toggleSubMenu = new EventEmitter<NgxMenuItem>();
  @Output() selectItem = new EventEmitter<NgxMenuItem>();
  @Output() clickItem = new EventEmitter<NgxMenuItem>();

  onHoverItem(item: NgxMenuItem) {
    this.hoverItem.emit(item);
  }

  onToggleSubMenu(item: NgxMenuItem) {
    this.toggleSubMenu.emit(item);
  }

  onSelectItem(item: NgxMenuItem) {
    this.selectItem.emit(item);
  }

  onClickItem(item: NgxMenuItem) {
    this.clickItem.emit(item);
  }

  trackByFn(index: number, item: NgxMenuItem) {
    return item.active;
  }
}

@Component({
  selector: 'ngx-menu',
  styleUrls: ['./menu.component.scss'],
  template: `
    <mat-nav-list>
      <ngx-menu-items
        [items]="items"
        [autoCollapse]="autoCollapse"
        (hoverItem)="onHoverItem($event)"
        (toggleSubMenu)="onToggleSubMenu($event)"
        (selectItem)="onSelectItem($event)"
        (clickItem)="onClickItem($event)">
      </ngx-menu-items>
    </mat-nav-list>
  `,
})
export class NgxMenuComponent implements OnInit, OnDestroy {
  @Input() items: NgxMenuItem[];
  @Input() autoCollapse: boolean = false;

  @Output() hoverItem = new EventEmitter<NgxMenuItem>();
  @Output() toggleSubMenu = new EventEmitter<NgxMenuItem>();
  @Output() selectItem = new EventEmitter<NgxMenuItem>();
  @Output() clickItem = new EventEmitter<NgxMenuItem>();

  private alive: boolean = true;

  constructor(private router: Router, private urlSerializer: UrlSerializer) {}

  ngOnInit() {
    this.initRouteChanges();
    this.setParents();
    this.selectNodes();
  }

  ngOnDestroy() {
    this.alive = false;
  }

  onHoverItem(item: NgxMenuItem) {
    this.hoverItem.emit(item);
  }

  onToggleSubMenu(item: NgxMenuItem) {
    this.toggleNodeSubMenu(item);
    this.toggleSubMenu.emit(item);
  }

  onSelectItem(item: NgxMenuItem) {
    this.selectItem.emit(item);
  }

  onClickItem(item: NgxMenuItem) {
    this.clickItem.emit(item);
  }

  private initRouteChanges() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .takeWhile(() => this.alive)
      .subscribe(() => {
        this.resetNodes();
        this.selectNodes();
      });
  }

  private setParents() {
    this.items.forEach(i => this.setParent(i));
  }

  private setParent(node: NgxMenuItem) {
    node.children &&
      node.children.forEach(c => {
        c.parent = node;
        this.setParent(c);
      });
  }

  private resetNodes() {
    this.items.forEach(i => this.resetNode(i));
  }

  private resetNode(node: NgxMenuItem) {
    node.active = false;
    node.children &&
      node.children.forEach(c => {
        this.resetNode(c);
      });
  }

  private selectNodes() {
    this.items.forEach(i => this.selectNode(i));
  }

  private selectNode(node: NgxMenuItem) {
    if ((node.activeFn && node.activeFn(node)) || this.hasLink(node)) {
      node.active = true;
      this.selectParentNode(node);
    }
    node.children &&
      node.children.forEach(c => {
        this.selectNode(c);
      });
  }

  private hasLink(node: NgxMenuItem): boolean {
    const link = (node.linkGetter && node.linkGetter(node)) || node.link;
    return link && this.router.isActive(this.urlSerializer.parse(link), node.exact || true);
  }

  private selectParentNode(node: NgxMenuItem) {
    const parent = node.parent;
    if (parent) {
      parent.expanded = true;
      parent.active = true;
      this.selectParentNode(parent);
    }
  }

  private toggleNodeSubMenu(node: NgxMenuItem) {
    if (this.autoCollapse) {
      this.collapseNodes(node);
    }
    node.expanded = !node.expanded;
  }

  private collapseNodes(expect?: NgxMenuItem) {
    this.items.forEach(i => this.collapseNode(i, expect));
  }

  private collapseNode(node: NgxMenuItem, expect?: NgxMenuItem) {
    if (expect && node === expect) return;
    node.expanded = false;
    node.children &&
      node.children.forEach(c => {
        this.collapseNode(c);
      });
  }
}
