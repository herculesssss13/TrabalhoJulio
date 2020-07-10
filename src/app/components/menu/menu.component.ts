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
                                    {label: 'Classe',routerLink:['/lista-classe']},
                                    {label: 'Titulo',routerLink:['/lista-titulos']},
                                    {label: 'Item'}
                                    
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
