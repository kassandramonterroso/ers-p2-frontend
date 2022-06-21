import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/employee.model';
import { Reimbursement } from '../reimbursement.model';
import { submitReimbursement } from '../submitReimbursement.model';
import { ReceiptImage } from '../receiptImage.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  baseUrl: string = "http://localhost:7474/api/";

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl+"employees");
  }

  getEmployee(empId: any): Observable<Employee>{
    return this.http.get<Employee>(this.baseUrl+"employees/"+empId);
  }

  updateEmployee(sentEmployee: Employee): Observable<Employee>{
    return this.http.put<Employee>(this.baseUrl+"employees", sentEmployee);
  }

  addReimbReq(newReimb: submitReimbursement): Observable<Reimbursement>{
    console.log(newReimb)
    return this.http.post<Reimbursement>(this.baseUrl+"reimbursement", newReimb);
  }

  getAllPendingByRequester(empId: any): Observable<Reimbursement[]>{
    console.log(empId)
    return this.http.get<Reimbursement[]>(this.baseUrl+"pending/"+empId)
  }

  getAllResolvedByRequester(empId: any): Observable<Reimbursement[]>{
    console.log(empId)
    return this.http.get<Reimbursement[]>(this.baseUrl+"resolved/"+empId)
  }

  uploadImage(newReceiptImage: ReceiptImage): Observable<ReceiptImage>{
    return this.http.post<ReceiptImage>(this.baseUrl+"uploadImage", newReceiptImage)
  } 

  getReimbById(reimbid: any): Observable<Reimbursement>{
    return this.http.get<Reimbursement>(this.baseUrl+"reimb/"+reimbid);
  }

}
