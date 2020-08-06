import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Classe } from '../models/Classe';
import { take } from 'rxjs/operators';

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
  private create(classe) {
    return this.http.post(this.API, classe);
  }


  salvar(item: Classe){
    this.http.post('http://localhost:8090/diretor', item).subscribe(
    res => {
      alert('Classe Salva com Sucesso!');
    },
    err => {
      console.error(err);
    }
    );
  }

  private update(classe){
    return this.http.put(`${this.API}/${classe.id}`, classe).pipe(take(1));
  }

  show(id: number): Observable<any> {
    return this.http.get(`${this.API}/${id}`) as Observable<any>;
  }

  remove(id){
    return this.http.delete(`${this.API}/${id}`);
  }

  loadById(id){
    return this.http.get<Classe>(`${this.API}/${id}`);
  }

  save(classe){
    if(classe.id){
      return this.update(classe);
    }
    return this.create(classe);
  }
}
