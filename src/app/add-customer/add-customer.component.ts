import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  title: string = 'customerForm'
  customerForm!: FormGroup

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      'name': new FormControl(null),
      'address': new FormControl(null),
      'phone number': new FormControl(null),
      'email': new FormControl(null),
      'type': new FormControl(null)
    })
  }

  onSubmit () {
    console.log(this.customerForm)
    this.customerForm = new FormGroup({
      'name': new FormControl(null),
      'address': new FormControl(null),
      'phone number': new FormControl(null),
      'email': new FormControl(null),
      'type': new FormControl(null)
    })
  }
}
