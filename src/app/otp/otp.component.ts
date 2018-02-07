import { Component, OnInit } from '@angular/core';
import { Inject, Injectable} from "@angular/core";
import { AuthenticationDetails, CognitoUser, CognitoUserAttribute} from "amazon-cognito-identity-js";
import { CognitoUtil} from "../services/cognito.service";
import { CognitoCallback} from "../services/cognito.service";
import { Globals } from '../common/globals';  // this for Gobal Values 

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  otp = '';
  username = '';
  constructor(@Inject(CognitoUtil) public cognitoUtil: CognitoUtil, private globals: Globals ) {  // pass for global valus
    this.username = globals.loginUserName; // assigning the value to the global variables
    console.log("-->"+globals.loginUserName+"<--"); // getting the global values
  }

  ngOnInit() {
    this.globals.defaultLoader = false;
  }

  confirmRegistration() {

    let userData = {
        Username: this.globals.cognitoUserName,
        Pool: this.cognitoUtil.getUserPool()
    };
  
    let cognitoUser = new CognitoUser(userData);
  //"https://mrTester112/binsAng5demo/"
    cognitoUser.confirmRegistration(this.otp, true, function (err, result) {
        if (err) {
            alert("ERROR : "+JSON.stringify(err));
        } else {
            alert("SUCCESS : "+JSON.stringify(result));
        }
    });
  }

  resendCode(){
    this.resendCodes();
    //alert("resend Clicked");
  }


//resendCode(callback: CognitoCallback): void {
  resendCodes(){
    let userData = {
        Username: this.globals.cognitoUserName,
        Pool: this.cognitoUtil.getUserPool()
    };
  
    let cognitoUser = new CognitoUser(userData);
  
    cognitoUser.resendConfirmationCode(function (err, result) {
        if (err) {
            //callback.cognitoCallback(err.message, null);
            alert(JSON.stringify(err));
        } else {
           // callback.cognitoCallback(null, result);
           alert(JSON.stringify(result));
        }
    });


}
}
