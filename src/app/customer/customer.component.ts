import { Component } from '@angular/core';
import { Customer } from '../add-customer/customer.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  constructor (private customerService: AppService) {}
  customers: Customer[] = []

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(customer => {
      this.customers = customer
    })
  }

  delete (id: string) {
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.customerService.getCustomers().subscribe(customer => {
        this.customers = customer
      })
    })
  }
}