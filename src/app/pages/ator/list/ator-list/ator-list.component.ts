import { Component, OnInit, ViewChild } from '@angular/core';
import { AtorFormComponent } from '../../form/ator-form/ator-form.component';
import { Table } from 'primeng/table';
import { Ator } from '../../models/Ator';
import { AtorFormService } from '../../services/ator-form.service';

@Component({
  selector: 'app-ator-list',
  templateUrl: './ator-list.component.html',
  styleUrls: ['./ator-list.component.css']
})
export class AtorListComponent implements OnInit {
  @ViewChild('DialogCadastrar') dialogAtor: AtorFormComponent;
  @ViewChild('dt') table: Table;

  atorSelecionado:Ator[];
  atores: Array<Ator>;
  ato: Array<any>;


  constructor(private atorService: AtorFormService) { }

  ngOnInit(): void {
    this.listar();


  }
  listar(){
    this.atorService.listar().subscribe(dados => this.atores = dados) ;

  }

  refresh() {
    this.ngOnInit();
  }

  openDialog(edicao: boolean, id: number) {
    this.dialogAtor.openDialog(edicao, id);
  }

  atualizarPagina(event = null) {

  }
}
