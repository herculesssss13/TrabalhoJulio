import { Injectable } from '@angular/core';
import { Ator } from '../models/Ator';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AtorFormService } from '../services/ator-form.service';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AtorResolverGuard implements Resolve<Ator>{

    constructor(private atorServico: AtorFormService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): import("rxjs").Observable<Ator> {
        if (route.params && route.params['id']) {
            return this.atorServico.loadById(route.params['id']);
        }

        return of({
            nome: null,
            id: null
        });
    }

}