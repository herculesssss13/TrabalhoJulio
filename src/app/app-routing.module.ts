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
import { AlocacaoFormComponent } from './pages/alocacao/form/alocacao-form/alocacao-form.component';
import { AlocacaoListComponent } from './pages/alocacao/list/alocacao-list/alocacao-list.component';
import { AtorResolverGuard } from './pages/ator/guards/ator.guard';
import { DiretorResolverGuard } from './pages/diretor/guards/diretor.guard';
import { ClasseResolverGuard } from './pages/classe/guards/classe.guard';
import { TituloResolverGuard } from './pages/titulo/guards/titulo.guard';
import { ClienteResolverGuard } from './pages/cliente/guards/cliente.guard';
import { DependenteResolverGuard } from './pages/dependente/guards/dependente.guard';
import { ItemResolverGuard } from './pages/item/guards/item.guard';
import { AlocacaoResolverGuard } from './pages/alocacao/guards/alocacao.guard';

const routes: Routes = [
  {
    path: "", component: MenuComponent,
    children: [
      { path: "lista-atores", component: AtorListComponent },
      {
        path: "novoAtor", component: AtorFormComponent, resolve: {
          ator: AtorResolverGuard
        }
      },
      {
        path: "ator/:id", component: AtorFormComponent, resolve: {
          ator: AtorResolverGuard
        }
      },

      { path: "lista-diretores", component: DiretorListComponent },
      {
        path: 'novoDiretor', component: DiretorFormComponent, resolve: {
          diretor: DiretorResolverGuard
        }
      },
      {
        path: 'diretor/:id', component: DiretorFormComponent, resolve: {
          diretor: DiretorResolverGuard
        }
      },

      { path: 'lista-classe', component: ClasseListComponent },
      {
        path: 'novaClasse', component: ClasseFormComponent, resolve: {
          classe: ClasseResolverGuard
        }
      },
      {
        path: 'classe/:id', component: ClasseFormComponent, resolve: {
          classe: ClasseResolverGuard
        }
      },

      { path: 'lista-titulos', component: TituloListComponent },
      {
        path: 'novoTitulo', component: TituloFormComponent, resolve: {
          titulo: TituloResolverGuard
        }
      },
      {
        path: 'titulo/:id', component: TituloFormComponent, resolve: {
          titulo: TituloResolverGuard
        }
      },

      { path: 'lista-clientes', component: ClienteListComponent },
      {
        path: 'novoCliente', component: ClienteFormComponent, resolve: {
          cliente: ClienteResolverGuard
        }
      },
      {
        path: 'cliente/:id', component: ClienteFormComponent, resolve: {
          cliente: ClienteResolverGuard
        }
      },

      { path: 'lista-dependentes', component: DependenteListComponent },
      {
        path: 'novoDependente', component: DependenteFormComponent, resolve: {
          dependente: DependenteResolverGuard
        }
      },
      {
        path: 'dependente/:id', component: DependenteFormComponent, resolve: {
          dependente: DependenteResolverGuard
        }
      },

      {
        path: 'novoItem', component: ItemFormComponent, resolve: {
          item: ItemResolverGuard
        }
      },
      { path: 'lista-itens', component: ItemListComponent },
      {
        path: 'item/:id', component: ItemFormComponent, resolve: {
          item: ItemResolverGuard
        }
      },

      {
        path: 'novaAlocacao', component: AlocacaoFormComponent, resolve: {
          alocacao: AlocacaoResolverGuard
        }
      },
      { path: 'lista-alocacao', component: AlocacaoListComponent },
      {
        path: 'alocacao/:id', component: AlocacaoFormComponent, resolve: {
          alocacao: AlocacaoResolverGuard
        }
      },




    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
