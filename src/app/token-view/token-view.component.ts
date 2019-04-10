import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
const jwtHelper = new JwtHelperService();
@Component({
  selector: 'app-token-view',
  templateUrl: './token-view.component.html',
  styleUrls: ['./token-view.component.css']
})
export class TokenViewComponent  {

  // Properties

  tokenRaw?: string;
  tokenDecoded?: any;
  tokenIssuedTimestamp: any;

  // Initialization

  constructor() {

    // Fetch the token from the browser's local storage
    this.tokenRaw = JSON.parse(localStorage.getItem('access_token'));
    console.log(this.tokenRaw);

    // If it exists, decode it, otherwise, create placeholder values for the view
    if (this.tokenRaw) {
      this.tokenDecoded = jwtHelper.decodeToken(this.tokenRaw);
      this.tokenIssuedTimestamp = new Date(this.tokenDecoded.iat * 1000);
    } else {
      this.tokenRaw = '(no token)';
      this.tokenDecoded = { userName: '', fullName: '', role: '' };
      this.tokenIssuedTimestamp = '';
    }
  }

}


