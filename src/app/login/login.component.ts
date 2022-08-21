import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { UsersService } from '../services/users.service';
import { User } from './user';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UsersService, private alertify: AlertifyService, private router: Router) { }
  users: User[] = [];

  username: string;
  password: string;
  user: User;

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    })
    this.userService.getUser().subscribe(data => {
      this.user = data;
    })
    console.log(localStorage.getItem('user'));
  }

  loginButtonOnClick(username: string, password: string) {



    this.userService.login(username, password).subscribe(data => {
      this.userService.setUser(data)
      if (data) {
        this.router.navigateByUrl('/contents');
        this.alertify.success("Giriş başarılı");
        localStorage.setItem('user', data);
      }
      else {
        this.alertify.error("Giriş başarısız");
      }
    })


  }

}
