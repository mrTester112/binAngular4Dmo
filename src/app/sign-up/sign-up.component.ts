import { Component, OnInit } from '@angular/core';
import { Inject, Injectable} from "@angular/core";
import { AuthenticationDetails, CognitoUser, CognitoUserAttribute} from "amazon-cognito-identity-js";
import { CognitoUtil} from "../services/cognito.service";
import { CognitoCallback} from "../services/cognito.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Globals } from '../common/globals';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements CognitoCallback {


  // variables Declarations
  public showSignUpScreen = true;
  
  username = 'Binod';
  mobilno = '8826536055';
  email = 'vmvivekmalik91@gmail.com';
  otp = '';
  usern = '';
  user = {};

  // constructor
  constructor( @Inject(CognitoUtil) public cognitoUtil: CognitoUtil , private router: Router, private globas:Globals) { 
 

  }

  // the first method tpo be called is ngOnInit() ** need to implemt in class 
  ngOnInit() {
  }

  switchToLoginScreen(){
    this.router.navigate(['/login']);   // for Making The Routes Changes
  }

  //-------------------------------------------Aws config---------------------------------------
  register(){
    this.registers(this);
    //this.router.navigate(['/login']);   // for Making The Routes Changes
  }
  registers(callback:CognitoCallback) {
        this.showSignUpScreen = true;
        this.globas.defaultLoader = true;
    this.user= {
        "mobile": "+91" + this.mobilno,
        "name": this.username,
        "email": this.email
        }
        console.log("UserRegistrationService: user is " + this.mobilno);

        let attributeList = [];

        let dataEmail = {
            Name: 'email',
            Value: this.email
        };

        let dataPhoneNumber = {
        Name: 'phone_number',
        Value: "+91"+this.mobilno
        };
        let dataNickname = {
            Name: 'name',
            Value: this.username
        };
        attributeList.push(new CognitoUserAttribute(dataEmail));
        attributeList.push(new CognitoUserAttribute(dataNickname));
        attributeList.push(new CognitoUserAttribute(dataPhoneNumber));
        this.usern=this.mobilno+"_12dd7fchs8f";
        this.globas.cognitoUserName = this.usern;
        this.globas.loginUserName = this.username;
    /* setTimeout(()=>{    //<<<---    using ()=> syntax
        this.showSignUpScreen = false;
    },5000);*/
        this.cognitoUtil.getUserPool().signUp(this.usern, "Binod@123", attributeList, null, function (err, result) {
            if (err) {
            // alert(err);
                callback.cognitoCallback(err.message, null);
            } else {
                console.log("UserRegistrationService: registered user is " + result);
            callback.cognitoCallback(null, result);
            }
        });

}

cognitoCallback(message: string, result: any) {
  if (message != null) { //error
      alert( message);
      console.log("result: " + message);
  } else { //success)
      //move to the next step
      console.log("redirecting");
      
      setTimeout(()=>{    //<<<---    using ()=> syntax
        this.router.navigate(['/otp']); 
    },3000);

        // for Making The Routes Changes
    //  this.showSignUpScreen = false;
     // alert(result.user.username);
  }
}


confirmRegistration() {

  let userData = {
      Username: this.usern,
      Pool: this.cognitoUtil.getUserPool()
  };

  let cognitoUser = new CognitoUser(userData);

  cognitoUser.confirmRegistration(this.otp, true, function (err, result) {
      if (err) {
          alert(JSON.stringify(err));
      } else {
          alert(JSON.stringify(result));
      }
  });
}

//resendCode(callback: CognitoCallback): void {
  resendCode(){
  let userData = {
      Username: this.usern,
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
