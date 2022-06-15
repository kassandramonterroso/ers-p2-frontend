import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/employee/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  baseUrl: string = "http://localhost:7474/allEmployees";

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]>{

    //Http get request to consume the endpoint
    return this.http.get<Employee[]>(this.baseUrl);
  }

  getEmployee(empId: any): Observable<Employee>{
    return this.http.get<Employee>(this.baseUrl+'/'+empId);
  }

  updateEmployee(sentEmployee: Employee): Observable<Employee>{
    return this.http.put<Employee>(this.baseUrl, sentEmployee);
  }

}
