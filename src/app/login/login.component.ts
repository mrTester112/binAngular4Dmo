import { Component, OnInit } from '@angular/core';
import { Inject, Injectable} from "@angular/core";
import { AuthenticationDetails, CognitoUser, CognitoUserAttribute} from "amazon-cognito-identity-js";
import { CognitoUtil} from "../services/cognito.service";
import { CognitoCallback} from "../services/cognito.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import { Globals } from '../common/globals';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements CognitoCallback {

  // variables Declarations
  public showLoginScreen = true;
  username = 'Binod';
  password = '9864903840';
  
  otp = '';
  public usern = '';
  user = {};

  // constructor
  constructor( @Inject(CognitoUtil) public cognitoUtil: CognitoUtil , private router: Router,  private globals: Globals ) { 

  }

validateLogin(){
  if(this.username == 'Binod' && this.password =='9864903840'){
    this.globals.loginUserName = this.username;

    console.log(this.globals.loginUserName );
    this.router.navigate(['/otp']);   // for Making The Routes Changes
  }else{
    alert("Invalid Username or Password");
  }
}

switchToSignUp(){
  this.router.navigate(['/signUp']);   // for Making The Routes Changes
}


  //-------------------------------------------Aws config---------------------------------------
  cognitoCallback(message: string, result: any) {
    if (message != null) { //error
        alert( message);
        console.log("result: " + message);
    } else { //success
        //move to the next step
        console.log("redirecting");
  
        this.showLoginScreen = false;
        alert(result.user.username);
    }
  }
}
