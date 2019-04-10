import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = { userName: '', password: '' };
  message = '';
  constructor(private _commonService: CommonService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this._commonService.validateUser(this.model).subscribe(res => {
      this.message = res.message;
      if (res.token) {
        localStorage.setItem('access_token', JSON.stringify(res.token));
        this._router.navigate(['/user/token-view']);
      }
      setTimeout(() => {
        this.message = '';
      }, 10000);
    }, err => {
      this.message = err.error.message || 'Something went wrong';
    });
  }

}
