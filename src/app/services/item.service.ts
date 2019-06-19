import {Injectable} from '@angular/core';
import * as http from 'http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerDTO} from '../dto/customerDTO';
import {ItemDTO} from '../dto/itemDTO';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(
    private http = HttpClient) {

  }

  addItem(itemDTO: ItemDTO): Observable<ItemDTO> {
    return this.http.post<ItemDTO>('http://localhost:8080/item', itemDTO);
  }

  getAllItems(): Observable<Array<ItemDTO>> {
    return this.http.get<Array<ItemDTO>>('http://localhost:8080/item');
  }

  updateItem(itemDTO: ItemDTO): Observable<ItemDTO> {

    return this.http.put<ItemDTO>('http://localhost:8080/item', itemDTO);
  }

  deleteItem(id: number): Observable<boolean> {
    alert('service == ' + id);
    return this.http.delete<boolean>('http://localhost:8080/item' + '?id=' + id);
  }



}
