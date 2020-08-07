import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Queryset } from './Models/querymodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  query: Queryset = {
    vehicleno: '',
    fromDate: '',
    toDate: ''
  }

  const url: string = '';

  constructor(private http: HttpClient) { }

  getByQuery(query: Queryset): Observable<any>{
    return this.http.get<any>(this.url + query); // sql query format
  }

  
}
