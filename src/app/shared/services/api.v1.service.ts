import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { enc } from '../common/common';

@Injectable({
  providedIn: 'root'
})
export class ApiV1Service {

  headers?: HttpHeaders
  constructor(private http: HttpClient) { }

  createHeaders() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('tokenid', 'token');
    return headers;
  }

  getHeaders() {
    if (this.headers) return this.headers
    this.headers = this.createHeaders()
    return this.headers
  }

  get(url: string) {
    let headers = this.getHeaders();
    return this.http.get(url, {
      headers: headers
    }).pipe(map((res: any) => {
      return res;
    }));
  };

  getList(url: string, params: any) {
    let headers = this.getHeaders();
    let input = Object.assign({}, params);

    // input != null && input.q != null
    if (false) {
      input.q = enc(JSON.stringify(input.q));
    } else {
      input.q = JSON.stringify(input.q);
    }

    return this.http.get(url, {
      headers: headers, params: input
    }).pipe(map((res: any) => {
      return res;
    }));
  }

  post(url: string, data: any) {
    let headers = this.getHeaders();
    return this.http.post(url, data, {
      headers: headers
    }).pipe(map((res: any) => {
      return res;
    }));
  }

  delete(url: string, id: string) {
    let headers = this.getHeaders();
    return this.http.delete(url + '/' + id, { headers: headers }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  put(url: string, obj: any) {
    let headers = this.getHeaders();
    return this.http.put(url, obj, {
      headers: headers
    }).pipe(map((res: any) => {
      return res;
    }));
  }
}
