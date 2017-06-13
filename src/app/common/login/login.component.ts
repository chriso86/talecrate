import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/mergeMap";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    username: 'arvind@myApp.com',
    password: 'pass123'
  };

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    var username = this.user.username;
    var password = this.user.password;

    if (username !== undefined && password !== undefined) {
        this.authService.login(username, password).flatMap((data) => {
          this.authService.auth.user = data.json().username;
          this.authService.auth.userRole = data.json().role;

          window.sessionStorage.token = data.json().token;
          window.sessionStorage.user = data.json().username; // to fetch the user details on refresh
          window.sessionStorage.userRole = data.json().role; // to fetch the user details on refresh

          this.router.navigateByUrl('http://localhost:3000/');

          return new Observable();
        }).catch(function(status) {
          alert('Oops something went wrong!');

          return Observable.throw(status.statusText);
        });
      } else {
        alert('Invalid credentials');
      }
  }

  ngOnInit() {
  }

}
