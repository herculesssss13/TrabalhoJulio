import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/Item';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private readonly API = 'http://localhost:8090/item';

  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Item[]>(this.API);
  }
  private create(item) {
    return this.http.post(this.API, item);
  }

  private update(item){
    return this.http.put(`${this.API}/${item.numSerie}`, item).pipe(take(1));
  }

  show(id: number): Observable<any> {
    return this.http.get(`${this.API}/${id}`) as Observable<any>;
  }

  remove(id){
    return this.http.delete(`${this.API}/${id}`);
  }

  loadById(id){
    return this.http.get<Item>(`${this.API}/${id}`);
  }

  save(item){
    if(item.numSerie){
      return this.update(item);
    }
    return this.create(item);
  }
}
