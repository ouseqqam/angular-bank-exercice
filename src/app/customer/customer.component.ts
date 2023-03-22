import { Component, EventEmitter } from '@angular/core';
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
  value: string = ''
  search = new EventEmitter<string>()

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

  onChange() {
    this.search.emit(this.value)
    console.log(this.value)
    this.customerService.getCustomers(this.value).subscribe(customer => {
      this.customers = customer
    })
  }
}