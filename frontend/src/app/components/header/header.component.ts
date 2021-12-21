import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public get token() : string | null {
    const token = localStorage.getItem('ipms_auth');
    return token;
  }

  constructor(
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  logout(){
      localStorage.removeItem('ipms_auth');
      this.router.navigate(['login']);
  }

}
