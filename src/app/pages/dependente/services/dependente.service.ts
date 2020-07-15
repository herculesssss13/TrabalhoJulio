import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dependente } from '../models/Dependente';

@Injectable({
  providedIn: 'root'
})
export class DependenteService {
  private readonly API = 'http://localhost:8090/dependentes';
  form: any = {};

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Dependente[]>(this.API);
  }
  create(cliente) {
    return this.http.post(this.API, cliente);
  }


  salvar(item: Dependente){
    this.http.post('http://localhost:8090/dependentes', item).subscribe(
    res => {
      alert('Dependente Salvo com Sucesso!');
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
