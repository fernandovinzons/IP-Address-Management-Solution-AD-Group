import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$!: Observable<any>;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.auth.isLoggedIn$;
  }


}
