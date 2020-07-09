import { Component, OnInit } from '@angular/core';
import {MegaMenuItem,MenuItem} from 'primeng/api';
import { Routes, Router, ActivatedRoute } from '@angular/router';
import { AtorListComponent } from 'src/app/pages/ator/list/ator-list/ator-list.component';
import { AtorFormService } from 'src/app/pages/ator/services/ator-form.service';

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
                            items: [{label: 'Ator',routerLink:['/lista-atores']},
                                    {label: 'Diretor',routerLink:['/lista-diretores']},
                                    {label: 'Classe'},
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
                          label: 'Event 1',
                          items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}]
                      },
                      {
                          label: 'Event 2',
                          items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
                      }
                  ],
                  [
                      {
                          label: 'Event 3',
                          items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}]
                      },
                      {
                          label: 'Event 4',
                          items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}]
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
