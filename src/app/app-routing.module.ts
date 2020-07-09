import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { AtorListComponent } from './pages/ator/list/ator-list/ator-list.component';
import { DiretorListComponent } from './pages/diretor/list/diretor-list/diretor-list.component';
import { DiretorFormComponent } from './pages/diretor/form/diretor-form/diretor-form.component';


const routes: Routes = [
  {
    path: "",component: MenuComponent,
    children:[
      {path: "lista-atores",component: AtorListComponent},
      {path: "lista-diretores",component: DiretorListComponent},
      {path: 'novo',component: DiretorFormComponent}

    ]
  }

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
