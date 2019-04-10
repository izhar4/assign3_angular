import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  model: any = { role: 'student', fullName: '', email: '', password: '', confirmPassword: '' };
  message: '';
  constructor(private _commonService: CommonService) { }

  ngOnInit() {
  }

  onSubmit() {
    this._commonService.createUserAccount(this.model).subscribe(res => {
      this.message = res.message || '';
      setTimeout(() => {
        this.message = '';
      }, 10000);
    }, err => {
      this.message = err.error.message || 'Something went wrong';
      console.log('error', err);
    });
  }
}
