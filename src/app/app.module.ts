import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { UpdatedInfoComponent } from './employee/updated-info/updated-info.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    EmployeeComponent,
    HomeComponent,
    UpdatedInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[UpdatedInfoComponent]
})
export class AppModule { }
