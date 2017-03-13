import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  /*
  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoia2VuYW4iLCJpYXQiOjE0ODkzOTYxMjcsImV4cCI6MTQ4OTQwNjIwN30.fDPySCeQTcAHjNcSP_HbekbS3jXoHWjQz6HG3Ms3olk
  */
  user: any = {};
  private signIn_url = 'localhost:8080/api/user/accesstoken'
  constructor(
    public http: Http
  ) { }
  signIn(){
    console.log("sign in", this.user);
    return this.http.post(this.signIn_url, {
      username: this.user.username,
      password: this.user.password
    }).map((res: Response)=>{
      console.log("res==>", res);
    })
  }
  ngOnInit() {
  }

}
