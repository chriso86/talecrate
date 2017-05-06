import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private loginUrl = 'login';

  auth = {
    user: null,
    userRole: null,
    isLoggedIn: () => {
      if (window.sessionStorage.token && window.sessionStorage.user) {
        return true;
      } else {
        if(this.auth.user) {
          delete this.auth.user;
        }
        return false;
      }
    }
  };

  constructor(private http: Http) {
  };

  login(username, password) {
    return this.http.post('http://localhost:3000/login', {
      username: username,
      password: password
    });
  };

  logout() {
    if (this.auth.isLoggedIn()) {
      delete this.auth.user;
      delete this.auth.userRole;

      delete window.sessionStorage.token;
      delete window.sessionStorage.user;
      delete window.sessionStorage.userRole;

      this.router.navigateByUrl('http://localhost:3000/login');
    };
  };

  tokenInterceptor() {
    return {
      request: function(config) {
        config.headers = config.headers || {};

        if (window.sessionStorage.token) {
          config.headers['X-Access-Token'] = window.sessionStorage.token;
          config.headers['X-Key'] = window.sessionStorage.user;
          config.headers['Content-Type'] = 'application/json';
        }

        return config || new Observable<any>().subscribe((result) => { return result; });
      },

      response: function(response) {
        return response || new Observable<any>().subscribe((result) => { return result; });
      }
    };
  };
}
