import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})
export class ActivateAccountComponent implements OnInit {
  model: any = { role: 'student', email: '', password: '', confirmPassword: '' };
  message = '';
  constructor(private _commonService: CommonService) { }

  ngOnInit() {
  }

  onSubmit() {
    this._commonService.activateuserAccount(this.model).subscribe(res => {
      this.message = res.message;
      setTimeout(() => {
        this.message = '';
      }, 10000);
    }, err => {
      console.log('error', err);
    });
  }

}
