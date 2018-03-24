import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
import { NGXLogger } from 'ngx-logger';
@Component({
  selector: 'app-employee-registation',
  templateUrl: './employee-registation.component.html',
  styleUrls: ['./employee-registation.component.scss']
})
export class EmployeeRegistationComponent implements OnInit {

  emploee: Employee = new Employee();
  // {
    // address: "",
    // birthdate: Date.now(),
    // contractNumber: "",
    // email: "",
    // firstName: "",
    // lastName: "",
    // mobileNumber: "",
    // position: ""
  // };
  constructor(private logger: NGXLogger) {
    this.logger.debug('Your log message goes here');
    this.logger.debug('Multiple', 'Argument', 'support');
  }

  ngOnInit() { 
  }


  onCreate(event: any){
    // this.emploee.firstName = 'Tesst'
    this.logger.debug('firstName: ' + this.emploee.firstName);
    this.logger.debug('lastName: ' + this.emploee.lastName);
    this.logger.debug('birthDate: ' + this.emploee.birthDate);
    this.logger.debug('address: ' + this.emploee.address);
    this.logger.debug('email: ' + this.emploee.email);
    this.logger.debug('contractNumber: ' + this.emploee.contractNumber);
    this.logger.debug('mobileNumber: ' + this.emploee.mobileNumber);
    this.logger.debug('appliedPosition: ' + this.emploee.appliedPosition );
    this.logger.debug('expectedSalary: ' + this.emploee.expectedSalary);
    this.logger.debug('reference: ' + this.emploee.reference);
    this.logger.debug('degree: ' + this.emploee.degree);
    this.logger.debug('university: ' + this.emploee.university);
    this.logger.debug('major: ' + this.emploee.major);
    this.logger.debug('gpa: ' + this.emploee.gpa);
    this.logger.debug('companyname: ' + this.emploee.companyname);
    this.logger.debug('startDate: ' + this.emploee.startDate);
    this.logger.debug('endDate: ' + this.emploee.endDate);
    this.logger.debug('role: ' + this.emploee.role);
    this.logger.debug('responsibility: ' + this.emploee.responsibility); 
  }

}
