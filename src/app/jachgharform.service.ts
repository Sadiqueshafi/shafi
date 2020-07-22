import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JachgharformService {


  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  postData(urlPrefix: string, query: any): Observable<any> {
    const url =  urlPrefix
    return this.http.post(url, query).pipe(
      catchError(this.handleError)
    )
  }

  getdata(urlPrefix: string, query: any): Observable<any> {
    const url = urlPrefix;
    return this.http.get(url, { params: { query: JSON.stringify(query) } });
  }


  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = error.error.msg;
    }
    return throwError(errorMessage);
  }
}
