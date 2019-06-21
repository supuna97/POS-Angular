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


  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.getAll();
  }

  addCustomer() {
    this.customerDTO.cid = 0;
    this.customerService.addCustomer(this.customerDTO).subscribe(
      result => {
        if (!result) {
          alert('Customer Added Successfully');
          this.getAll();
        } else {
          alert('Customer Not Added');
        }

      }
    );
  }

  updateCustomer() {
    alert(JSON.stringify(this.customerDTO));
    this.customerService.updateCustomer(this.customerDTO).subscribe(
      result => {
        if (!result) {
          alert('Customer Update Successfully..');
          this.getAll();
          this.isEdit = false;
        } else {
          alert('Customer Not Update..');
        }

      }
    );
  }

  getAll() {
    this.customerService.getAllCustomers().subscribe(result => {
      this.customerList = result;
      console.log('Customer List :- ' + JSON.stringify(this.customerDTO.cid));
    });

  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(result => {
      if (!result) {
        alert('Customer deleted successfully');
        this.getAll();
      } else {
        alert('Customer deleted failed');
      }
    });
  }

  loadCustomer(customer) {
    this.isEdit = true;
    const obj = this.customerDTO;
    this.customerDTO = Object.assign(obj, customer);
  }
}
