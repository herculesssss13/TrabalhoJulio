import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

import { ClasseFormComponent } from './pages/classe/form/classe-form/classe-form.component';
import { ClasseListComponent } from './pages/classe/list/classe-list/classe-list.component';





@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AtorFormComponent,
    AtorListComponent,
    DiretorFormComponent,
    DiretorListComponent,
    ClasseFormComponent,
    ClasseListComponent
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

 


  ],
  providers: [AtorFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
