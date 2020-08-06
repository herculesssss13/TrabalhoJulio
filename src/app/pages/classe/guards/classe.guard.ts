import { Injectable } from '@angular/core';
import { Classe } from '../models/Classe';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ClasseService } from '../services/classe.service';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ClasseResolverGuard implements Resolve<Classe>{

    constructor(private classeServico: ClasseService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): import("rxjs").Observable<Classe> {
        if (route.params && route.params['id']) {
            return this.classeServico.loadById(route.params['id']);
        }

        return of({
            nome: null,
            id: null,
            valor: null,
            dataDevolucao: null
        });
    }
}