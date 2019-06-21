import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {CustomerDTO} from '../../dto/customerDTO';
import {ItemDTO} from '../../dto/itemDTO';
import {ItemService} from '../../services/item.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  customerList: Array<CustomerDTO> = [];
  customerId: number;
  itemList: Array<ItemDTO> = [];
  itemId: number;
  value: number;
  customerdto: CustomerDTO = new CustomerDTO();
  itemdto: ItemDTO = new ItemDTO();

  constructor(
    private customerService: CustomerService, private itemservice: ItemService
  ) {
  }

  ngOnInit() {
    this.loadCustomers();
    this.loadItems();
  }

  loadCustomers() {
    this.customerService.getAllCustomers().subscribe(result => {
      this.customerList = result;
    });
  }

  loadItems() {
    this.itemservice.getAllItems().subscribe(result => {
      this.itemList = result;
    });
  }

  setPrice(i: number) {
    // for (const entry of this.customerList) {
    //
    // }
    // this.value = this.customerList.indexOf(i);
    // alert(this.value);
  }

}
