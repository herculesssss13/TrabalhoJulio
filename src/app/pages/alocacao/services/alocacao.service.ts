import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alocacao } from '../models/Alocacao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlocacaoService {
  private readonly API = 'http://localhost:8090/locacao';

  constructor(private http: HttpClient) { }


  listar(){
    return this.http.get<Alocacao[]>(this.API);
  }
  create(alocacao) {
    return this.http.post(this.API, alocacao);
  }


  salvar(alocacao: Alocacao){
    this.http.post('http://localhost:8090/locacao', alocacao).subscribe(
    res => {
      alert('Alocacao Salva com Sucesso!');
    },
    err => {
      console.error(err);
    }
    );
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
