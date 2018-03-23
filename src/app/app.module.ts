import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { EmployeeRegistationComponent } from './employee/employee-registation/employee-registation.component';

import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';

import { EmployeeService } from './employee/employee.service';
@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    EmployeeComponent,
    HomeComponent,
    EmployeeRegistationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DlDateTimePickerDateModule,
    NgbModule.forRoot()
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
