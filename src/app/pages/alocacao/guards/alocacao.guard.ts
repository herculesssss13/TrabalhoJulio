import { Injectable } from '@angular/core';
import { Alocacao } from '../models/Alocacao';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AlocacaoService } from '../services/alocacao.service';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AlocacaoResolverGuard implements Resolve<Alocacao>{

    constructor(private alocacaoServico: AlocacaoService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): import("rxjs").Observable<Alocacao> {
        if (route.params && route.params['id']) {
            return this.alocacaoServico.loadById(route.params['id']);
        }

        return of({
            id: null,
            item: null,
            cliente: null,
            valorCobrado: null,
            dataDevolucaoPrevista: null
        });
    }


}