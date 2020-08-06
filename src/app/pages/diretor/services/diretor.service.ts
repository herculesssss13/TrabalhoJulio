import { Diretor } from './../models/Diretor';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DiretorService {

  private readonly API = 'http://localhost:8090/diretor';
  form: any = {};

  constructor(private http:HttpClient) {
    this.form.title = "";
    this.form.body = "";
  }

  listar(){
    return this.http.get<Diretor[]>(this.API);
  }
  private create(diretor) {
    return this.http.post(this.API, diretor);
  }


  salvar(item: Diretor){
    this.http.post('http://localhost:8090/diretor', item).subscribe(
    res => {
      alert('Diretor Salvo com Sucesso!');
    },
    err => {
      console.error(err);
    }
    );
  }

  private update(diretor){
    return this.http.put(`${this.API}/${diretor.id}`, diretor).pipe(take(1));
  }

  show(id: number): Observable<any> {
    return this.http.get(`${this.API}/${id}`) as Observable<any>;
  }

  remove(id){
    return this.http.delete(`${this.API}/${id}`);
  }

  loadById(id){
    return this.http.get<Diretor>(`${this.API}/${id}`);
  }

  save(diretor){
    if(diretor.id){
      return this.update(diretor);
    }
    return this.create(diretor);
  }
}
