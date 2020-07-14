import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/Cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private readonly API = 'http://localhost:8090/socio';

  constructor(private http:HttpClient) { }
  listar(){
    return this.http.get<Cliente[]>(this.API);
  }
  create(cliente) {
    return this.http.post(this.API, cliente);
  }


  salvar(item: Cliente){
    this.http.post('http://localhost:8090/socio', item).subscribe(
    res => {
      alert('Cliente Salvo com Sucesso!');
    },
    err => {
      console.error(err);
    }
    );
  }

  update(item: any): Observable<any> {
    return this.http.put<any>(`${this.API}`, item);
  }

  show(numInscricao: number): Observable<any> {
    return this.http.get(`${this.API}/${numInscricao}`) as Observable<any>;
  }

  remove(numInscricao){
    return this.http.delete(`${this.API}/${numInscricao}`);
  }
}
