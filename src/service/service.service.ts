import { Injectable } from '@angular/core';
//
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/model/class.model';

const API = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private httpClient: HttpClient) {}

  getProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(API).pipe();
  }
}
