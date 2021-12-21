import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InternetProtocolModel } from '../models/internet-protocol.model';
import { AuditModel } from '../models/audit.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseAPIUrl = "http://localhost:8000/api";
  loginPath = "/login";
  ipPath = "/ip";
  auditPath = "/audit";

  actions = {
    ADD : "/add",
    UPDATE : "/update"
  };

  constructor(
    private http: HttpClient,
  ) {}

  // Login Services
  login(email: string, password: string): Observable<any>{
    return this.http.post(this.baseAPIUrl + this.loginPath, { email, password });
  }


  // IP Services
  addIP(name: string, description: string, headers: any): Observable<any>{
    return this.http.post(this.baseAPIUrl + this.ipPath + this.actions.ADD, { name, description }, { headers : headers });
  }

  updateIP(description: string, id: string, headers: any): Observable<any>{
    return this.http.post(this.baseAPIUrl + this.ipPath + "/" + id + this.actions.UPDATE, { description }, { headers : headers });
  }

  getIPList(headers: any): Observable<InternetProtocolModel[]> {
    return this.http.get<InternetProtocolModel[]>(this.baseAPIUrl + this.ipPath, { headers : headers });
  }


  // Audit Services

  getAuditHistory(headers: any): Observable<AuditModel[]> {
    return this.http.get<AuditModel[]>(this.baseAPIUrl + this.auditPath, { headers : headers });
  }
}
