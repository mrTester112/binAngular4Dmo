import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
//let params = { 'clientId': '97' };
@Injectable()
export class DemoService {
 
    constructor(private http:HttpClient) {}
    
 
    // Uses http.get() to load data from a single API endpoint
    getFoods(myparam:any) {
        let params = myparam;

        return this.http.get('http://54.169.114.10:3001/client/ext/getExternalFund', { params });
    }
 
    postApi(myparam){
        let params = myparam;
        return this.http.post('http://54.169.114.10:3001/client/ext/getExternalFund',params);
    }

    addUser(myparam){
        let params = myparam;
        return this.http.post( 'https://6eq3iod6j0.execute-api.us-east-1.amazonaws.com/dev/addcustomer',params);
    }
}