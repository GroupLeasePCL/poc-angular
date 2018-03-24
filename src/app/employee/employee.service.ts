import { Injectable, NgModule } from '@angular/core';
import { Employee } from './employee';

import { Http, Response, RequestOptions, Headers ,HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';

import { HttpClient, HttpHeaders ,HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


//import {res} from 'rxjs'
/*
@NgModule({
  providers: [Http],
  imports: [
		HttpModule
	]
})
*/

@Injectable()
export class EmployeeService {

  protected headers: Headers;
  constructor(private http: Http) {
          this.headers = new Headers();
          this.headers.append('Content-Type', 'application/json')
          this.headers.append('Accept', 'application/json');
      }

  addEmployee(employee:Employee){
    var options = new RequestOptions({headers: this.headers});
    this.http.post("http://172.255.152.115:8081/employment-applications/",employee,options)
    .subscribe(res => console.log(res.toString));
    console.log("POST");
  }

  getEmployee(){
    this.http.get("http://172.255.152.115:8081/employment-applications?offset=0&limit=2")
    .subscribe(data => {
      console.log(data);
    });

  }


}
