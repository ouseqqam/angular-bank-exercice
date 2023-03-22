import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../add-customer/customer.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent {
  constructor (private router: Router, private customerService: AppService, private activateRoute: ActivatedRoute) {
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
  submited: boolean = false
  title: string = 'customerForm'
  customerForm!: FormGroup
  id: string | null | undefined

  setvalue(customer: Customer) {
    const keys = Object.keys(customer)
    const values = Object.values(customer)

    for (let i = 0; i < keys.length; i++)
      this.customerForm.get(keys[i])?.setValue(values[i])
  }

  ngOnInit(): void {
    this.id =  this.activateRoute.snapshot.paramMap.get('id')
    this.customerService.getCustomer(this.id).subscribe(c => {
      this.setvalue(c)
    })
  }

  onSubmit () {
    console.log(this.customerForm.value)
    this.customerService.editCustomer(this.id, this.customerForm.value).subscribe(c => console.log(c))
    this.router.navigate([''])
  }
}
