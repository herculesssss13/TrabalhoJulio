import { Injectable } from '@angular/core';
import { Dependente } from '../models/Dependente';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DependenteService } from '../services/dependente.service';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DependenteResolverGuard implements Resolve<Dependente>{

    constructor(private dependenteServico: DependenteService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): import("rxjs").Observable<Dependente> {
        if (route.params && route.params['id']) {
            return this.dependenteServico.loadById(route.params['id']);
        }

        return of({
            numInscricao: null,
            nome: null,
            dataNascimento: null,
            sexo: null,
            estahAtivo: null,
            socio: null
        });
    }
}