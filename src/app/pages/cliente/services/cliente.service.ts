import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/Cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
<<<<<<< HEAD
  private readonly API = 'http://localhost:8090/cliente';

  constructor(private http:HttpClient) { }
=======
  private readonly API = 'http://localhost:8090/socio';

  constructor(private http: HttpClient) { }
>>>>>>> 9450c93738cc713926751f48b83ebd2629f269be
  listar(){
    return this.http.get<Cliente[]>(this.API);
  }
  create(cliente) {
    return this.http.post(this.API, cliente);
  }


  salvar(item: Cliente){
<<<<<<< HEAD
    this.http.post('http://localhost:8090/cliente', item).subscribe(
=======
    this.http.post('http://localhost:8090/socio', item).subscribe(
>>>>>>> 9450c93738cc713926751f48b83ebd2629f269be
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
