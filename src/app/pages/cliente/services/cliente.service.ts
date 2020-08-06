import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/Cliente';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private readonly API = 'http://localhost:8090/socio';

  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Cliente[]>(this.API);
  }
  listar2(){
    return this.http.get<Cliente[]>('http://localhost:8090/socio/listarTudo');
  }
  private create(cliente) {
    return this.http.post(this.API, cliente);
  }


  

  private update(cliente){
    return this.http.put(`${this.API}/${cliente.numInscricao}`, cliente).pipe(take(1));
  }

  show(numInscricao: number): Observable<any> {
    return this.http.get(`${this.API}/${numInscricao}`) as Observable<any>;
  }

  remove(numInscricao){
    return this.http.delete(`${this.API}/${numInscricao}`);
  }

  loadById(id){
    return this.http.get<Cliente>(`${this.API}/${id}`);
  }

  save(cliente){
    if(cliente.id){
      return this.update(cliente);
    }
    return this.create(cliente);
  }
}
