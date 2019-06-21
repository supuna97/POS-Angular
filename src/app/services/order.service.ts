import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OrderDTO} from '../dto/orderDTO';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) {
  }

  addOrders(orderDTO: OrderDTO): Observable<OrderDTO> {
    return this.http.post<OrderDTO>('http://localhost:8080/orders', orderDTO);
  }

  getAllOrders(): Observable<Array<OrderDTO>> {
    return this.http.get<Array<OrderDTO>>('http://localhost:8080/orders');
  }

  updateOrder(orderDTO: OrderDTO): Observable<OrderDTO> {

    return this.http.put<OrderDTO>('http://localhost:8080/orders', orderDTO);
  }

  deleteOrder(id: number): Observable<boolean> {
    alert('service == ' + id);
    return this.http.delete<boolean>('http://localhost:8080/orders' + '?id=' + id);
  }

}
