import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/employee.model';
import { Reimbursement } from '../reimbursement.model';
import { submitReimbursement } from '../submitReimbursement.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  baseUrl: string = "http://localhost:7474/";

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl+"allEmployees");
  }

  getEmployee(empId: any): Observable<Employee>{
    return this.http.get<Employee>(this.baseUrl+"employees/"+empId);
  }

  updateEmployee(sentEmployee: Employee): Observable<Employee>{
    return this.http.put<Employee>(this.baseUrl+"employee", sentEmployee);
  }

  addReimbReq(newReimb: submitReimbursement): Observable<submitReimbursement>{
    console.log(newReimb)
    return this.http.post<submitReimbursement>(this.baseUrl+"reimbursement", newReimb);
  }

  getAllPendingByRequester(empId: any): Observable<Reimbursement[]>{
    console.log(empId)
    return this.http.get<Reimbursement[]>(this.baseUrl+"pending/"+empId)
  }

  getAllResolvedByRequester(empId: any): Observable<Reimbursement[]>{
    console.log(empId)
    return this.http.get<Reimbursement[]>(this.baseUrl+"resolved/"+empId)
  }

}
