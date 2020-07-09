import { Ator } from './../models/Ator';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtorFormService {
  atoresUrl = 'http://localhost:8090/ator';
  form: any = {};

  constructor(private http:HttpClient) {
    this.form.title = "";
    this.form.body = "";
   }

  listar(){
    return this.http.get<any[]>(`${this.atoresUrl}`)
  }

  salvar(item: Ator){
    this.http.post('http://localhost:8090/ator', item).subscribe(
    res => {
      alert('Artigo Salvo com Sucesso!');
    },
    err => {
      console.error(err);
    }
    );
  }

  update(item: any): Observable<any> {
    return this.http.put<any>(`${this.atoresUrl}`, item);
  }

  show(id: number): Observable<any> {
    return this.http.get(`${this.atoresUrl}/${id}`) as Observable<any>;
  }
}
