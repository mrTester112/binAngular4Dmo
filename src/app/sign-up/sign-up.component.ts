import { Component, OnInit } from '@angular/core';
import { Inject, Injectable} from "@angular/core";
import { AuthenticationDetails, CognitoUser, CognitoUserAttribute} from "amazon-cognito-identity-js";
import { CognitoUtil} from "../services/cognito.service";
import { CognitoCallback} from "../services/cognito.service";
import { RouterModule, Routes, Resolve, Router, NavigationEnd, NavigationStart} from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pairwise';
import { Globals } from '../common/globals';
import * as moment from 'moment';  // use "npm install moment "
import * as $ from 'jquery';  //npm install --save jquery // npm install -D @types/jquery 
//import { CanComponentDeactivate } from '../can-component-deactivate.service'; 
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService, Ng4LoadingSpinnerComponent  } from 'ng4-loading-spinner';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
  
})

export class SignUpComponent implements CognitoCallback,OnInit {

  // variables Declarations
  public showSignUpScreen = true;

  template: string =`<img src="../.././assets/images/loader.gif">`
  
  
  username = 'Binod';
  mobilno = '8826536055';
  email = 'binodkumar112@gmail.com';
  otp = '';
  usern = '';
  user = {};
  backpressed:boolean = true;

  // constructor
  constructor( private ng4LoadingSpinnerService: Ng4LoadingSpinnerService,@Inject(CognitoUtil) public cognitoUtil: CognitoUtil , private router: Router, private globas:Globals) { 
    
    /*this.router.events.filter(event => event instanceof NavigationStart )
    .subscribe(event =>  alert("nav Change")); */

   /* router.events
    .filter((evt) => evt instanceof NavigationEnd )
    .subscribe((evt) => {
      console.log("--->"+evt);
      alert("--->"+evt);
      if (evt instanceof NavigationStart) {
        alert("Route Change Start!");
      } else if (evt instanceof NavigationEnd) {
        alert("Route Change End!");
      }
    });*/
    this.initLocationChange();
 
  }

  // the first method tpo be called is ngOnInit() ** need to implemt in class 
  ngOnInit() {


  }

  loading = true;

  canDeactivate() {
    
    if (this.loading) {
        this.loading=false;
        alert('no, you wont navigate anywhere');
        return false;
    }
    alert('you are going away, goodby');
    this.loading=true;
    return true;
}

  initLocationChange(){

    
    $(window).on('locationChangeStart', function(e){
        // do something...
        alert("hello");
    });

      // window.addEventListener('popstate', function(e){alert('url changed')});
//    /* this.router.events
//     .filter(event => event instanceof NavigationEnd)
//     .pairwise().subscribe((event) => {
        
//         //this.canDeactivate();

//     }); */
  }

  switchToLoginScreen(){
    this.router.navigate(['/login']);   // for Making The Routes Changes
  }

  //-------------------------------------------Aws config---------------------------------------
  register(){
    this.ng4LoadingSpinnerService.show();
    this.registers(this);
    
    //this.router.navigate(['/login']);   // for Making The Routes Changes
     /*  setTimeout(()=>{    //<<<---    using ()=> syntax
        this.ng4LoadingSpinnerService.hide();
    },5000);*/
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
        this.usern=this.mobilno+moment().toISOString();
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
        this.ng4LoadingSpinnerService.hide();
        this.router.navigate(['/otp']); 
   },2000);
   
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
