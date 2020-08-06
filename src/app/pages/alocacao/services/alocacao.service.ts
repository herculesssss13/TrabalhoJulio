import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alocacao } from '../models/Alocacao';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlocacaoService {
  private readonly API = 'http://localhost:8090/locacao';

  constructor(private http: HttpClient) { }


  listar(){
    return this.http.get<Alocacao[]>(this.API);
  }
  private create(alocacao) {
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

  private update(alocacao){
    return this.http.put(`${this.API}/${alocacao.id}`, alocacao).pipe(take(1));
  }

  show(id: number): Observable<any> {
    return this.http.get(`${this.API}/${id}`) as Observable<any>;
  }

  remove(id){
    return this.http.delete(`${this.API}/${id}`);
  }

  loadById(id){
    return this.http.get<Alocacao>(`${this.API}/${id}`);
  }

  save(alocacao){
    if(alocacao.id){
      return this.update(alocacao);
    }
    return this.create(alocacao);
  }
}
