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

  getCustomers(txt = ''): Observable<Customer[]> {
    let url = `${API_URL}`
    if (txt)
      url = `${API_URL}?q=${txt}`
    return this.http.get<Customer[]>(url)
  }

  getCustomer(id: any) : Observable<Customer> {
    return this.http.get<Customer>(`${API_URL}/${id}`)
  }

  getLatest(len: number): Observable<Customer[]> {

    const url = `${API_URL}?_start=${len - 11}&_end=${len}`
    return this.http.get<Customer[]>(url)
  }

  
  deleteCustomer(id: string) : Observable<void> {
    return this.http.delete<void>(`${API_URL}/${id}`)
  }

  editCustomer(id: any, data: Customer) : Observable<Customer> {
    return this.http.put<Customer>(`${API_URL}/${id}`, data)
  }
}