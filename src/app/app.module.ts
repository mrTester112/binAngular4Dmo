import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule , Routes} from '@angular/router';

//import { AppRoutingModule } from './app-routing.module';
import { DemoService } from './demo.service'; 
import { CognitoUtil } from "./services/cognito.service";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OtpComponent } from './otp/otp.component';
import { Globals } from './common/globals';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';



const appRoutes : Routes = [
  {path:'*', component : AppComponent },
  {path:'home',component : HomeComponent},
  {path:'login', component : LoginComponent},
  {path:'signUp', component : SignUpComponent},
  {path:'forgotPass',component : ForgotPasswordComponent},
  {path:'otp',  component : OtpComponent},
  { path: '**',   redirectTo: '/signUp', pathMatch: 'full' },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
  ]
  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    OtpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [DemoService,CognitoUtil ,Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
