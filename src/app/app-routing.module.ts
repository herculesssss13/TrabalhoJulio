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



const routes: Routes = [
  {
    path: "",component: MenuComponent,
    children:[
      {path: "lista-atores",component: AtorListComponent},
      {path: "novoAtor",component:  AtorFormComponent},
      {path: "lista-diretores",component: DiretorListComponent},
      {path: 'novoDiretor',component: DiretorFormComponent},
      {path: 'lista-classe',component: ClasseListComponent},
      {path: 'novaClasse',component: ClasseFormComponent},
      {path: 'lista-titulos',component: TituloListComponent},
      {path: 'novoTitulo',component: TituloFormComponent},
      
      
    ]
  }

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
