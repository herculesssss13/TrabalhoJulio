import { Component, OnInit } from '@angular/core';
import {MegaMenuItem,MenuItem} from 'primeng/api';
import { Routes, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router
  ) { }



  items: MegaMenuItem[];

    ngOnInit() {
        this.items = [

            {
                label: 'ControleAcervo', icon: 'pi pi-fw pi-cog',
                items: [
                    [
                        {
                            label: 'Cadastro',
                            items: [
                                    {label: 'Ator',routerLink:['/lista-atores']},
                                    {label: 'Diretor',routerLink:['/lista-diretores']},
                                    {label: 'Classe',routerLink:['/lista-classe']},
                                    {label: 'Item'},
                                    {label: 'Titulo'}
                                  ]
                        }
                    ]
                ]
            },
            {
              label: 'Atendimento Cliente', icon: 'pi pi-fw pi-calendar',
              items: [
                  [
                      {
                          label: 'Atendimentos',
                          items: [{label: 'Cliente',routerLink:['/lista-clientes']}]
                      }
                  ]
              ]
          }
        ]
    }

    onSubmit(){

      this.router.navigate(['/lista-diretores']);
   }



}
