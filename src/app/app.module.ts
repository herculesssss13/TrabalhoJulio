<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

=======
import { DependenteListComponent } from './pages/dependente/list/dependente-list/dependente-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
>>>>>>> 9450c93738cc713926751f48b83ebd2629f269be
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MegaMenuModule} from 'primeng/megamenu';
import { MenuComponent } from './components/menu/menu.component';
import { AtorFormComponent } from './pages/ator/form/ator-form/ator-form.component';
import {DialogModule} from 'primeng/dialog';
import { AtorListComponent } from './pages/ator/list/ator-list/ator-list.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AtorFormService } from './pages/ator/services/ator-form.service';
import { HttpClientModule } from '@angular/common/http';
import { DiretorFormComponent } from './pages/diretor/form/diretor-form/diretor-form.component';
import { DiretorListComponent } from './pages/diretor/list/diretor-list/diretor-list.component';
import {InputTextModule} from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
<<<<<<< HEAD

=======
>>>>>>> 9450c93738cc713926751f48b83ebd2629f269be
import { ClasseFormComponent } from './pages/classe/form/classe-form/classe-form.component';
import { ClasseListComponent } from './pages/classe/list/classe-list/classe-list.component';
import { TituloListComponent } from './pages/titulo/list/titulo-list/titulo-list.component';
import { TituloFormComponent } from './pages/titulo/form/titulo-form/titulo-form.component';
import {MatSelectModule} from '@angular/material/select';
import { ClienteFormComponent } from './pages/cliente/form/cliente-form/cliente-form.component';
import { ClienteListComponent } from './pages/cliente/list/cliente-list/cliente-list.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
<<<<<<< HEAD


=======
import { DependenteFormComponent } from './pages/dependente/form/dependente-form/dependente-form.component';
>>>>>>> 9450c93738cc713926751f48b83ebd2629f269be



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AtorFormComponent,
    AtorListComponent,
    DiretorFormComponent,
    DiretorListComponent,
    ClasseFormComponent,
    ClasseListComponent,
    TituloListComponent,
    TituloFormComponent,
    ClienteFormComponent,
<<<<<<< HEAD
    ClienteListComponent
=======
    ClienteListComponent,
    DependenteFormComponent,
    DependenteListComponent
>>>>>>> 9450c93738cc713926751f48b83ebd2629f269be
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MegaMenuModule,
    DialogModule,
    ButtonModule,
    TableModule,
    CardModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot(),
    MatSelectModule
<<<<<<< HEAD

 


=======
>>>>>>> 9450c93738cc713926751f48b83ebd2629f269be
  ],
  providers: [AtorFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
