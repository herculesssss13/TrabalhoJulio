import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { AtorListComponent } from './pages/ator/list/ator-list/ator-list.component';
import { DiretorListComponent } from './pages/diretor/list/diretor-list/diretor-list.component';
import { DiretorFormComponent } from './pages/diretor/form/diretor-form/diretor-form.component';
import { ClasseListComponent } from './pages/classe/list/classe-list/classe-list.component';
import { ClasseFormComponent } from './pages/classe/form/classe-form/classe-form.component';
import { AtorFormComponent } from './pages/ator/form/ator-form/ator-form.component';
import { TituloListComponent } from './pages/titulo/list/titulo-list/titulo-list.component';
import { TituloFormComponent } from './pages/titulo/form/titulo-form/titulo-form.component';
import { ClienteListComponent } from './pages/cliente/list/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './pages/cliente/form/cliente-form/cliente-form.component';
import { DependenteFormComponent } from './pages/dependente/form/dependente-form/dependente-form.component';
import { DependenteListComponent } from './pages/dependente/list/dependente-list/dependente-list.component';
import { ItemFormComponent } from './pages/item/form/item-form/item-form.component';
import { ItemListComponent } from './pages/item/list/item-list/item-list.component';

const routes: Routes = [
  {
    path: "",component: MenuComponent,
    children:[
      {path: "lista-atores", component: AtorListComponent},
      {path: "novoAtor", component:  AtorFormComponent},
      {path: "lista-diretores", component: DiretorListComponent},
      {path: 'novoDiretor', component: DiretorFormComponent},
      {path: 'lista-classe', component: ClasseListComponent},
      {path: 'novaClasse', component: ClasseFormComponent},
      {path: 'lista-titulos', component: TituloListComponent},
      {path: 'novoTitulo', component: TituloFormComponent},
      {path: 'lista-clientes', component: ClienteListComponent},
      {path: 'novoCliente', component: ClienteFormComponent},
      {path: 'lista-dependentes', component: DependenteListComponent},
      {path: 'novoDependente', component: DependenteFormComponent},
      {path: 'novoItem', component: ItemFormComponent},
      {path: 'lista-itens', component: ItemListComponent}
      
      

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
