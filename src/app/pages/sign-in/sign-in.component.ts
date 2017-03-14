import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


import { AuthenticationService } from '../../services/authentication/authentication.service';
import { AlertService } from '../../services/alert/alert.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  user: any = {};
  returnUrl: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) { }
  signIn() {
    console.log("sign in", this.user);
    this.authenticationService.login(this.user.username, this.user.password)
      .subscribe(
      data => {
        console.log("登陆成功：", data);
        this.alertService.success("login success");
        this.router.navigate([this.returnUrl]);
      },
      error => {
        console.log("登陆失败：", error);
        this.alertService.error(error._body);
      });
  }
  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    console.log(this.returnUrl);
  }

}
