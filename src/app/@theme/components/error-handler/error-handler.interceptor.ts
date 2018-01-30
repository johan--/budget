import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../../@acl';
import { ErrorHandlerService } from './error-handler.service';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).catch((err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.auth.logout();
          this.router.navigate(['/auth/login']);
        } else {
          this.errorHandler.open({ status: err.status, message: err.message });
        }
      }
      return Observable.throw((err && err.message) || 'Server error');
    });
  }

  private get errorHandler(): ErrorHandlerService {
    return this.injector.get(ErrorHandlerService);
  }

  private get router(): Router {
    return this.injector.get(Router);
  }

  private get auth(): AuthService {
    return this.injector.get(AuthService);
  }
}
