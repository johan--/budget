import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../@acl';

@Injectable()
export abstract class BaseHttpService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  abstract list(): Observable<any>;
  abstract getById(id: string | number): Observable<any>;
  abstract create(entity: any): Observable<any>;
  abstract update(entity: any, ...args: any[]): Observable<any>;
  abstract remove(id: string | number): Observable<any>;

  get(uri: string, options?): Observable<any> {
    return this.http.get(this.getUrl(uri), options);
  }

  post(uri: string, data, options?): Observable<any> {
    return this.http.post(this.getUrl(uri), data, options);
  }

  put(uri: string, data, options?): Observable<any> {
    return this.http.put(this.getUrl(uri), data, options);
  }

  delete(uri: string, options?): Observable<any> {
    return this.http.delete(this.getUrl(uri), options);
  }

  private getUrl?(uri: string): string {
    return this.auth.generateApiUrl(uri);
  }
}
