import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmploymentApplicationEntry } from './employee-list/employee-application-entry';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

const BASE_URL = environment.baseApiUrl + 'employment-applications';

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmploymentApplications(page: number, pageSize: number): Observable<EmploymentApplicationEntry[]> {
    return this.http.get<EmploymentApplicationEntry[]>(BASE_URL, { 
      params: {
        offset: page.toString(), 
        limit: pageSize.toString()
      }
    });
  }
}
