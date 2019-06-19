import {Component, OnInit} from '@angular/core';
import {ItemDTO} from '../../dto/itemDTO';
import {ItemService} from '../../services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  itemDTO: ItemDTO = new ItemDTO();
  itemList: Array<ItemDTO> = [];
  isEdit: Boolean = false;
  itemId: number;

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
  }

  addItem() {
    this.itemDTO.code = 0;
    console.log(JSON.stringify(this.itemDTO));
    this.itemService.addItem(this.itemDTO).subscribe(
      result => {
        if (result) {
          alert(JSON.stringify(result));
        }

      }
    );
  }

  updateItem() {
    alert(JSON.stringify(this.itemDTO));
    this.itemService.updateItem(this.itemDTO).subscribe(
      result => {
        if (result) {
          alert(JSON.stringify(result));
        }

      }
    );
  }

  getAll() {
    this.itemService.getAllItems().subscribe(result => {
      this.itemList = result;
      console.log('Customer List :- ' + JSON.stringify(this.itemDTO.cid));
    });

  }

  deleteCustomer(id: number) {
    alert('IDm componont :----> ' + id);
    this.itemService.deleteItem(id).subscribe(relsult => {
      if (relsult === true) {
        alert('Item deleted successfully');
      } else {
        alert('Item deleted failed');
      }
    });
  }

  loadCustomer(item) {
    this.isEdit = true;
    const obj = this.itemDTO;
    this.itemDTO = Object.assign(obj, item);
  }

}
