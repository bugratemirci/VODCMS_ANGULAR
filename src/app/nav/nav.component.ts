import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../login/user';
import { UsersService } from '../services/users.service';
import { CookieService } from '../services/cookie.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router, private userService: UsersService, private cookieService: CookieService) { }
  user: User
  ngOnInit(): void {
    this.userService.getUser().subscribe(data => {
      this.user = data;
    })

  }
  btnLogOutOnClick() {
    this.userService.resetUser();
    this.router.navigateByUrl('/')
  }
  btnOpenManagementPanel() {
    console.log("Yönetim paneli");
  }

}
