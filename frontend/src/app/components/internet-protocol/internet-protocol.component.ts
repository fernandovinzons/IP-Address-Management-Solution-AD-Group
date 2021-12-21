import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-internet-protocol',
  templateUrl: './internet-protocol.component.html',
  styleUrls: ['./internet-protocol.component.scss']
})
export class InternetProtocolComponent implements OnInit {

  ip_list: any[] = [];

  form = new FormGroup({
      ipaddress: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
  });

  public get token() : string | null {
    const token = localStorage.getItem('ipms_auth');
    return token;
  }

  headers = { 'Accept' : 'application/json',
              'Authorization' : 'Bearer ' + this.token };

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loadTableData();
  }

  submitForm() {
    if (this.form.invalid) { return; }

    this.apiService.addIP(this.form.get('ipaddress')?.value, this.form.get('description')?.value, this.headers)
    .subscribe((response) => {
        this.loadTableData();
    });
  }

  loadTableData(){
    this.apiService.getIPList(this.headers)
    .subscribe((response) => {
      if(response){
        this.ip_list = response ? response : [];
      }
    });
  }


}
