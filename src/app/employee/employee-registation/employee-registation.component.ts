import { Component, OnInit, Injectable } from '@angular/core';
import {Employee} from '../employee';
import { NGXLogger } from 'ngx-logger';
import {EmployeeService} from '../employee.service';
import {NgbDateAdapter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class NgbDateNativeAdapter extends NgbDateAdapter<Date> {

  fromModel(date: Date): NgbDateStruct {
    return (date && date.getFullYear) ? {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()} : null;
  }

  toModel(date: NgbDateStruct): Date {
    return date ? new Date(date.year, date.month - 1, date.day) : null;
  }
}


@Component({
  selector: 'app-employee-registation',
  templateUrl: './employee-registation.component.html',
  styleUrls: ['./employee-registation.component.scss'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]

})
export class EmployeeRegistationComponent implements OnInit {

  employee: Employee = new Employee();
  constructor(private logger: NGXLogger, private employeeService: EmployeeService ) {
    this.logger.debug('Your log message goes here');
    this.logger.debug('Multiple', 'Argument', 'support');
  }

  ngOnInit() { 
  }


  onCreate(event: any){
    // this.emploee.firstName = 'Tesst'
    // this.emploee.expectedSalary  = parseInt(this.emploee.e)
    this.logger.debug('firstName: ' + this.employee.firstName);
    this.logger.debug('lastName: ' + this.employee.lastName);
    this.logger.debug('birthDate: ' + this.employee.birthDate);
    this.logger.debug('address: ' + this.employee.address);
    this.logger.debug('email: ' + this.employee.email);
    this.logger.debug('contractNumber: ' + this.employee.contactNumber);
    this.logger.debug('mobileNumber: ' + this.employee.mobileNumber);
    this.logger.debug('appliedPosition: ' + this.employee.appliedPosition );
    this.logger.debug('expectedSalary: ' + this.employee.expectedSalary);
    this.logger.debug('reference: ' + this.employee.reference);
    this.logger.debug('degree: ' + this.employee.degree);
    this.logger.debug('university: ' + this.employee.university);
    this.logger.debug('major: ' + this.employee.major);
    this.logger.debug('gpa: ' + this.employee.gpa);
    this.logger.debug('companyname: ' + this.employee.companyname);
    this.logger.debug('startDate: ' + this.employee.startDate);
    this.logger.debug('endDate: ' + this.employee.endDate);
    this.logger.debug('role: ' + this.employee.role);
    this.logger.debug('responsibility: ' + this.employee.responsibility); 
    // this.employee.expectedSalary = 5000;
    // this.employee.birthDate =  new Date();
    this.employeeService.addEmployee(this.employee);
    this.employee = new Employee();
  }

}
