import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MenuService {


  private REST_API_SERVER = 'https://www.themealdb.com'; 

  constructor(private http: HttpClient) { }
  
  getPlatillos(url:string): Observable<any>{
  return this.http.get(this.REST_API_SERVER+url);
  }
  
  getPlatillo(url:string): Observable<any>{
  return this.http.get(this.REST_API_SERVER+url);
  }
}
    