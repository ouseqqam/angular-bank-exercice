import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  count: number = 0
  total: number = 0
  constructor (private customerService: AppService) {}

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe( value => {
      this.count = value.length
      // this.total = value.reduce((accum, value.money) => accum + value)
    }) 
  }
}