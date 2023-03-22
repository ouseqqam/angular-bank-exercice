import { Component, OnInit } from '@angular/core';
import { Customer } from '../add-customer/customer.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  count: number = 0
  total: number = 0
  customers: Customer[] = []
  constructor (private customerService: AppService) {}

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe( value => {
      this.count = value.length
      value.map(v => {
        if (v.hasOwnProperty('amount') && v.amount) {
          this.total += Number(v.amount)
        }
      }) 
      this.getLatest(this.count)
    })
  }

  getLatest(len: number) {
    this.customerService.getLatest(len).subscribe(customer => {
      this.customers = customer
    })
  }
}