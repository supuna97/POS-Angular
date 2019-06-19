import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {CustomerDTO} from '../../dto/customerDTO';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerDTO: CustomerDTO = new CustomerDTO();
  customerList: Array<CustomerDTO> = [];
  isEdit: Boolean = false;
  customerId: number;

  constructor() {
  }

  ngOnInit() {

  }
}
