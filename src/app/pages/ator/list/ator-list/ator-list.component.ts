import { Component, OnInit, ViewChild } from '@angular/core';
import { AtorFormComponent } from '../../form/ator-form/ator-form.component';
import { Table } from 'primeng/table';
import { Ator } from '../../models/Ator';
import { AtorFormService } from '../../services/ator-form.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Classe } from 'src/app/pages/classe/models/Classe';
import { Location} from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ator-list',
  templateUrl: './ator-list.component.html',
  styleUrls: ['./ator-list.component.css']
})
export class AtorListComponent implements OnInit {
  @ViewChild('DialogCadastrar') dialogAtor: AtorFormComponent;
  @ViewChild('dt') table: Table;

  atores: Ator[];
  ator: Ator;
  atorSelecionada:Classe;

  constructor(private atorService: AtorFormService,
              private router : Router,
              private route : ActivatedRoute) { }

  ngOnInit() {
    this.ator = new Ator();
    this.atorService.listar().subscribe(dados => this.atores = dados);
  }
  
  onConfirmDelete(c){
    this.atorSelecionada = c;
    this.atorService.remove(this.atorSelecionada.id).subscribe(
      success => {
        alert('Ator Excluido com Sucesso!'),
        this.listar();
      },
      error => alert('Erro ao remover Ator!')
    );
  }

  
  listar(){
    this.atorService.listar().subscribe(
      (dados) => {
      this.atores = dados;
      }
    );
  }

  salvar() {
    this.atorService.salvar(this.ator);
    this.listar();
  }

  onEdit(id){
    this.router.navigate(['ator',id]);
  }
  

}
