import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Titulo } from '../models/Titulo';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TituloService {
  private readonly API = 'http://localhost:8090/titulo';

  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Titulo[]>(this.API);
  }
  private create(titulo) {
    return this.http.post(this.API, titulo);
  }

  private update(titulo){
    return this.http.put(`${this.API}/${titulo.id}`, titulo).pipe(take(1));
  }

  show(id: number): Observable<any> {
    return this.http.get(`${this.API}/${id}`) as Observable<any>;
  }

  remove(id){
    return this.http.delete(`${this.API}/${id}`);
  }

  loadById(id){
    return this.http.get<Titulo>(`${this.API}/${id}`);
  }

  save(titulo){
    if(titulo.id){
      return this.update(titulo);
    }
    return this.create(titulo);
  }
}
