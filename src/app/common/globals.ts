// globals.ts
import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  role: string = 'test';
  
  defaultLoader : boolean = false;  // for Loader
  cognitoUserName: string = '';
  loginUserName:string = '';
}