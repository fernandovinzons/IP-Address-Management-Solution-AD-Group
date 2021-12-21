import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { InternetProtocolModel } from '../models/internet-protocol.model';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseAPIUrl = "http://localhost:8000/api";
  loginPath = "/login";
  ipPath = "/ip";

  actions = {
    ADD : "/add",
    UPDATE : "/update"
  };

  constructor(
    private http: HttpClient,
  ) {}

  login(email: string, password: string): Observable<any>{
    return this.http.post(this.baseAPIUrl + this.loginPath, { email, password });
  }

  addIP(name: string, description: string, headers: any): Observable<any>{
    return this.http.post(this.baseAPIUrl + this.ipPath + this.actions.ADD, { name, description }, { headers : headers });
  }

  updateIP(description: string, id: string, headers: any): Observable<any>{
    return this.http.post(this.baseAPIUrl + this.ipPath + "/" + id + this.actions.UPDATE, { description }, { headers : headers });
  }

  getIPList(headers: any): Observable<InternetProtocolModel[]> {
    return this.http.get<InternetProtocolModel[]>(this.baseAPIUrl + this.ipPath, { headers : headers });
  }

}
