import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

export class TableDataSource extends DataSource<any[]> {
  constructor(public data: any[]) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<any[]> {
    return Observable.of(this.data);
  }

  disconnect(collectionViewer: CollectionViewer) {}
}
