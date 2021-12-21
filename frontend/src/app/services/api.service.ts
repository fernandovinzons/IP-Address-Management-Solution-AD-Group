import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseAPIUrl = "http://localhost:8000/api";
  loginPath = "/login";
  IPPath = "/ip";

  constructor(private http: HttpClient) {}

  login(email: string , password: string): Observable<any>{
    return this.http.post(this.baseAPIUrl + this.loginPath, { email, password });
  }
}
