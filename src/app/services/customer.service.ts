import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CustomerDTO} from '../dto/customerDTO';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor(
    private  http = HttpClient
  ) {
  }
  addCustomer(customerDTO: CustomerDTO): Observable<CustomerDTO> {
    console.log(JSON.stringify(customerDTO));
    return this.http.post<CustomerDTO>('http://localhost:8080/customers', customerDTO);
  }

  getAllCustomers(): Observable<Array<CustomerDTO>> {
    return this.http.get<Array<CustomerDTO>>('http://localhost:8080/customers');
  }

  updateCustomer(customerDTO: CustomerDTO): Observable<CustomerDTO> {
    console.log(customerDTO.cid);
    console.log(JSON.stringify(customerDTO));
    return this.http.put<CustomerDTO>('http://localhost:8080/customers', customerDTO);
  }

  deleteCustomer(id: number): Observable<boolean> {
    alert('service == ' + id);
    return this.http.delete<boolean>('http://localhost:8080/customers' + '?id=' + id);
  }

}
