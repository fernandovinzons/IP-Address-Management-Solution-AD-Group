import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {

  audit_list: any[] = [];


  public get token() : string | null {
    const token = localStorage.getItem('ipms_auth');
    return token;
  }

  headers = { 'Accept' : 'application/json',
              'Authorization' : 'Bearer ' + this.token };

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.loadTableData();
  }

  loadTableData(){
    this.apiService.getAuditHistory(this.headers)
    .subscribe((response) => {
      if(response){
        this.audit_list = response ? response : [];
      }
    });
  }
}
