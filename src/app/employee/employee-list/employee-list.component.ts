import { Component, OnInit, Input } from '@angular/core';
import { ChangeEvent } from 'angular-virtual-list';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { EmploymentApplicationEntry } from './employee-application-entry';
import { EmployeeService } from '../employee.service';

const FETCHING_SIZE: number = 100;

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: EmploymentApplicationEntry[] = [];
  criteria = {
    applicationId: false,
    firstName: false,
    lastName: false,
    email: false
  };

  source$ = new BehaviorSubject<EmploymentApplicationEntry[]>(null);
  items$ = new Observable<EmploymentApplicationEntry[]>(null);
  
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.fetchNext(0, FETCHING_SIZE);
  }

  fetchMore(event: ChangeEvent) {
    if (event.end === this.employees.length) {
      this.fetchNext(this.employees.length, FETCHING_SIZE);
    }
  }

  fetchNext(page: number, size: number): void {
    console.log("Fetching...");
    this.employeeService.getEmploymentApplications(page, size)
      .subscribe(
        data => {
          data.map((item, idx) => {
            item.index = this.employees.length + idx;
            return item;
          })
          this.employees = this.employees.concat(data);
          this.source$.next(this.employees);
        }
      );
  }
  
  openUpdateComponent(applicationId: string): void {
    alert(applicationId);
  }
}
