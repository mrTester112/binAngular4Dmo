import { Component, OnInit } from '@angular/core';
import { Inject, Injectable} from "@angular/core";
import { AuthenticationDetails, CognitoUser, CognitoUserAttribute} from "amazon-cognito-identity-js";
import { CognitoUtil} from "../services/cognito.service";
import { CognitoCallback} from "../services/cognito.service";
import { Globals } from '../common/globals';  // this for Gobal Values 
import { RouterModule, Routes, Resolve, Router} from '@angular/router';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService, Ng4LoadingSpinnerComponent  } from 'ng4-loading-spinner';


@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements CognitoCallback ,OnInit {

  otp = '';
  username = '';
  
  constructor(private ng4LoadingSpinnerService: Ng4LoadingSpinnerService, @Inject(CognitoUtil) public cognitoUtil: CognitoUtil,private router: Router, private globals: Globals ) {  // pass for global valus
    this.username = globals.loginUserName; // assigning the value to the global variables
    console.log("-->"+globals.loginUserName+"<--"); // getting the global values
  }

  ngOnInit() {
    
  }

  confirmRegistration(){
    this.ng4LoadingSpinnerService.show();
    this.confirmRegistrations(this);
    
  }
  confirmRegistrations(callback:CognitoCallback) {

    let userData = {
        Username: this.globals.cognitoUserName,
        Pool: this.cognitoUtil.getUserPool()
    };
  
    let cognitoUser = new CognitoUser(userData);
  
    cognitoUser.confirmRegistration(this.otp, true, function (err, result) {
        if (err) {
           // alert("ERROR : "+JSON.stringify(err));
            callback.cognitoCallback(err,null);
        } else {
            //alert("SUCCESS : "+JSON.stringify(result));
            callback.cognitoCallback(null,result);
        }
    });
  }


  cognitoCallback(message: string, result: any) {
    this.ng4LoadingSpinnerService.hide();
    if (message != null) { //error
        console.log("result: " + message);
        alert( message);
    } else {                //success)
        console.log("result : "+result);
        this.router.navigate(['/login']); 
    }
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
