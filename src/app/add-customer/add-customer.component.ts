import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  constructor (private customerService: AppService) {}
  submited: boolean = false
  title: string = 'customerForm'
  customerForm!: FormGroup

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      'firstName': new FormControl(null),
      'lastName': new FormControl(null),
      'address': new FormControl(null),
      'email': new FormControl(null),
      'gender': new FormControl(null),
      'amount': new FormControl(null)
      // 'type': new FormControl(null)
    })
  }

  onSubmit () {
    this.customerService.insertCustomer(this.customerForm.value).subscribe(value => {
      console.log(value)
      this.submited = !this.submited
      setTimeout( () => {this.submited = !this.submited}, 3000)
      this.customerForm = new FormGroup({
        'firstName': new FormControl(null),
        'lastName': new FormControl(null),
        'address': new FormControl(null),
        'email': new FormControl(null),
        'gender': new FormControl(null),
        'amount': new FormControl(null)
        // 'type': new FormControl(null)
      })
    }, err => {
      console.log(err)
    })
  }
}
