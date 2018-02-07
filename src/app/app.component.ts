import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DemoService } from './demo.service';
import * as moment from 'moment';  // use "npm install moment "



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  /*animations: [
    trigger ('goals',[
      transition('* => *')
    ])

  ] */
})
export class AppComponent {

  // variables Defined Below
  title = 'app';
  myDate: Date;
  now ='';
  public showSignUpScreen = true;
  username = 'Binod';
  mobilno = '9864903840';
  email = 'investorsindiatechnologies@gmail.com';
  otp = '';
  usern = '';
  public foods;
  user ={};

  // constructor Defined Below
  constructor(private _demoService: DemoService) { 
    this.myDate = new Date();
    this.now = moment().format('YYYY-DD-MM');   // this is example for using moment
    console.log(this.now);                      // moment format example
    
  }
   // get Api through service Defined Below
  getFoods() {
    this._demoService.getFoods({ 'clientId': '97' }).subscribe(
      data => { this.foods = data },
      err => console.error(err),
      () => console.log('done loading foods ' + JSON.stringify(this.foods))
    );
  }

  // post Api through service Defined Below
  postApi() {
    this._demoService.postApi({ 'clientId': '97' }).subscribe(
      data => { this.foods = data },
      err => console.error(err),
      () => console.log('done loading foods ' + JSON.stringify(this.foods))
    );
  }


// Dummy Sanchits api defined below
  addUser() {
    alert(this.username + this.mobilno + this.email);
    this.showSignUpScreen = false;

    this._demoService.addUser({
      "mobile": "+91" + this.mobilno,
      "name": this.username,
      "email": this.email
    }).subscribe(
      data => {
      this.foods = data;
        this.onSuccess(data)
      },
      err => console.error(err),
      () => console.log('done loading foods ' + JSON.stringify(this.foods))
      );
  }
  
// on Success method defined below
  onSuccess(data: any) {
    if (data.status == 1) {
      alert("Status is 1" + "ok");
    } else {
      alert("Status is 0" + "not ok");
    }

  }


}
