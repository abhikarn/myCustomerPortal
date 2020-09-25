import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpParams, HttpBackend } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line: typedef
  private get apiUrl() {
    return isDevMode() ? 'http://northwind.netcore.io/' : 'http://northwind.netcore.io/';
  }

  get<T>(endpoint: string, id?: any, options?): Observable<T> {
    const resourceURI = id ? `${this.apiUrl}${endpoint}/${id}` : `${this.apiUrl}${endpoint}`;
    return this._callApi<T>(resourceURI, 'GET', null, options);
  }
  private _callApi<T>(url: string, method: any, ...restParams): Observable<T> {
    const [payload, userOptions] = restParams;
    const options = { ...userOptions } || { headers: null };
    // options.headers = this._createHeaders(token, options.headers);
    let req = null;
    if (payload) {
      req = new HttpRequest(method, url, payload, options);
    } else {
      req = new HttpRequest(method, url, options);
    }
    return this.http.request<HttpEvent<T>>(req).pipe((map((res) => {
      const r = res as any;
      if (userOptions && userOptions.reportProgress) {
        return r;
      } else {
        return r.body;
      }
    })));
    // return this.authSvc
    //   .acquireToken()
    //   .pipe(flatMap((token: string) => {
    //     let req = null;
    //     const options = {...userOptions} ||  { headers: null };
    //     options.headers = this._createHeaders(token, options.headers);
    //     if (!!options.params) {
    //       options.params = new HttpParams({ encoder: new HttpParameterCoder(), fromObject: options.params });
    //     }
    //     if (payload) {
    //       req = new HttpRequest(method, url, payload, options);
    //     } else {
    //       req = new HttpRequest(method, url, options);
    //     }
    //     return this.http.request<HttpEvent<T>>(req);
    //   }),
    //     map((res) => {
    //       const r = res as any;
    //       if (userOptions && userOptions.reportProgress) {
    //         return r;
    //       } else {
    //         return r.body;
    //       }
    //     }));
  }
}
