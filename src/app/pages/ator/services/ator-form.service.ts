import { Ator } from './../models/Ator';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AtorFormService {
  private readonly API = 'http://localhost:8090/ator';
  form: any = {};
  constructor(private http:HttpClient) {
    this.form.title = "";
    this.form.body = "";
   }

   listar(){
    return this.http.get<Ator[]>(this.API);
  }
  private create(ator) {
    return this.http.post(this.API, ator);
  }


  salvar(item: Ator){
    this.http.post('http://localhost:8090/ator', item).subscribe(
    res => {
      alert('Ator Salvo com Sucesso!');
    },
    err => {
      console.error(err);
    }
    );
  }

  private update(ator){
    return this.http.put(`${this.API}/${ator.id}`, ator).pipe(take(1));
  }

  show(id: number): Observable<any> {
    return this.http.get(`${this.API}/${id}`) as Observable<any>;
  }

  remove(id){
    return this.http.delete(`${this.API}/${id}`);
  }

  loadById(id){
    return this.http.get<Ator>(`${this.API}/${id}`);
  }

  save(ator){
    if(ator.id){
      return this.update(ator);
    }
    return this.create(ator);
  }
}
