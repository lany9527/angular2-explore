import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../../models/user';

@Injectable()
export class UserService {
  apiUrl: string = 'http://localhost:4000'
  constructor(private http: Http) { }
  
  create(user: User) {
    return this.http.post(this.apiUrl + '/users/register', user, this.jwt());
  }


  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }
}