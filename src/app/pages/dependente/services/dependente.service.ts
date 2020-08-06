import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dependente } from '../models/Dependente';
import { take } from 'rxjs/operators';

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
  private create(cliente) {
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

  private update(dep){
    return this.http.put(`${this.API}/${dep.numInscricao}`, dep).pipe(take(1));
  }

  show(numInscricao: number): Observable<any> {
    return this.http.get(`${this.API}/${numInscricao}`) as Observable<any>;
  }

  remove(numInscricao){
    return this.http.delete(`${this.API}/${numInscricao}`);
  }

  loadById(id){
    return this.http.get<Dependente>(`${this.API}/${id}`);
  }

  save(dep){
    if(dep.id){
      return this.update(dep);
    }
    return this.create(dep);
  }
}
