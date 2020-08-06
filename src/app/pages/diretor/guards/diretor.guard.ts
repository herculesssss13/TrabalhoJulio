import { Injectable } from '@angular/core';
import { Diretor } from '../models/Diretor';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DiretorService } from '../services/diretor.service';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DiretorResolverGuard implements Resolve<Diretor>{

    constructor(private diretorServico: DiretorService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): import("rxjs").Observable<Diretor> {
        if (route.params && route.params['id']) {
            return this.diretorServico.loadById(route.params['id']);
        }

        return of({
            nome: null,
            id: null
        });
    }

}