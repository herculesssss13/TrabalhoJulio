import { DiretorService } from './../../services/diretor.service';
import { Diretor } from './../../models/Diretor';
import { Table } from 'primeng/table';
import { DiretorFormComponent } from './../../form/diretor-form/diretor-form.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import { FormGroup } from '@angular/forms';
import { preserveWhitespacesDefault } from '@angular/compiler';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-diretor-list',
  templateUrl: './diretor-list.component.html',
  styleUrls: ['./diretor-list.component.css'],
  preserveWhitespaces : true
})
export class DiretorListComponent implements OnInit {
  @ViewChild('DialogCadastrar') dialogDiretor: DiretorFormComponent;
  @ViewChild('dt') table: Table;

  diretores: Diretor[];
  diretor: Diretor;
  modalRef: BsModalRef;
  diretorSelecionado:Diretor;
  @ViewChild('deleteModal') deleteModal;

  constructor(private diretorService:DiretorService,
             ) { }

  ngOnInit(){
    this.diretor = new Diretor();
    this.diretorService.listar().subscribe(dados => this.diretores = dados);
  }




  onConfirmDelete(direto){
    this.diretorSelecionado = direto;
    this.diretorService.remove(this.diretorSelecionado.id).subscribe(
      success => {
        alert('Diretor Excluido com Sucesso!'),
        this.listar();
      },
      error => alert('Erro ao remover diretor!')
    );
  }

  
  listar(){
    this.diretorService.listar().subscribe(
      (dados) => {
      this.diretores = dados;
      }
    );
  }

  salvar() {
    this.diretorService.salvar(this.diretor);
    this.listar();
  }

  

    

}
