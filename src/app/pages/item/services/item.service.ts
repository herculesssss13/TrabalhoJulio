import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/Item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private readonly API = 'http://localhost:8090/item';

  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Item[]>(this.API);
  }
  create(item) {
    return this.http.post(this.API, item);
  }

  update(item: any): Observable<any> {
    return this.http.put<any>(`${this.API}`, item);
  }

  show(id: number): Observable<any> {
    return this.http.get(`${this.API}/${id}`) as Observable<any>;
  }

  remove(id){
    return this.http.delete(`${this.API}/${id}`);
  }
}
