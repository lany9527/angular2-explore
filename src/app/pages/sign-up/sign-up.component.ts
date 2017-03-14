import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user/user.service';
import {AlertService} from '../../services/alert/alert.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: any = {};
  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,
  ) { }

  ngOnInit() {}
  signUp() {
    this.userService.create(this.user)
      .subscribe(
      data => {
        // console.log("注册成功", data);
        this.alertService.success("注册成功");
        setTimeout(()=>{
          this.router.navigate(['/signin']);
        },2000);
      },
      error => {
        // console.log("注册失败", error);
        this.alertService.error("注册失败");
      });
  }

}
