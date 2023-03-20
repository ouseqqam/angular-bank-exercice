import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './add-customer/customer.model';

const API_URL = 'http://localhost:3000/customers'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) {}

  insertCustomer(data: Customer): Observable<Customer> {
    return this.http.post<Customer>(API_URL, data)
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL)
  }

  
  deleteCustomer(id: string) : Observable<void> {
    return this.http.delete<void>(`${API_URL}/${id}`)
  }
}