import { Injectable } from '@angular/core';
import { Cliente } from '../models/Cliente';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ClienteResolverGuard implements Resolve<Cliente>{

    constructor(private clienteServico: ClienteService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): import("rxjs").Observable<Cliente> {
        if (route.params && route.params['id']) {
            return this.clienteServico.loadById(route.params['id']);
        }

        return of({
            numInscricao: null,
            nome: null,
            dataNascimento: null,
            sexo: null,
            estahAtivo: null,
            cpf: null,
            endereco: null,
            telefone: null
        });
    }


}