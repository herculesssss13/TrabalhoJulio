import { Item } from '../models/Item';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ItemService } from '../services/item.service';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ItemResolverGuard implements Resolve<Item>{

    constructor(private itemServico: ItemService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): import("rxjs").Observable<Item> {
        if (route.params && route.params['id']) {
            return this.itemServico.loadById(route.params['id']);
        }

        return of({
            numSerie: null,
            titulo: null,
            tipo: null,
            dataAquisicao: null,
        });
    }




}