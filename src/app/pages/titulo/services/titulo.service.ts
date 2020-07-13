import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Titulo } from '../models/Titulo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TituloService {
  private readonly API = 'http://localhost:8090/titulo';

  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Titulo[]>(this.API);
  }
  create(titulo) {
    return this.http.post(this.API, titulo);
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
