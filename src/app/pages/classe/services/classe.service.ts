import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Classe } from '../models/Classe';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  private readonly API = 'http://localhost:8090/classe';
  form: any = {};

  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<Classe[]>(this.API);
  }
  create(classe) {
    return this.http.post(this.API, classe);
  }


  salvar(item: Classe){
    this.http.post('http://localhost:8090/classe', item).subscribe(
    res => {
      alert('Classe Salva com Sucesso!');
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
