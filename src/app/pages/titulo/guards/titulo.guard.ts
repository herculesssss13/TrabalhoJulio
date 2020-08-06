import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Titulo } from '../models/Titulo';
import { TituloService } from '../services/titulo.service';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class TituloResolverGuard implements Resolve<Titulo>{

    constructor(private tituloServico : TituloService){}


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): import("rxjs").Observable<Titulo>  {
       if(route.params && route.params['id']){
        return this.tituloServico.loadById(route.params['id']);
       }

       return of({
        id:null,
        nome: null,
        listAtores: null,
        diretor: null,
        ano: null,
        sinopse:null,
        categoria:null,
        classe:null
       });
    }
      
  }