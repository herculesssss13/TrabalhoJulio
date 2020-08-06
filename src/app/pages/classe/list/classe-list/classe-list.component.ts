import { Component, OnInit } from '@angular/core';
import { Classe } from '../../models/Classe';
import { ClasseService } from '../../services/classe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classe-list',
  templateUrl: './classe-list.component.html',
  styleUrls: ['./classe-list.component.css']
})
export class ClasseListComponent implements OnInit {
  classes: Classe[];
  classe: Classe;
  classeSelecionada:Classe;
  constructor(private classeService:ClasseService,private router : Router) { }

  ngOnInit() {
    this.classe = new Classe();
    this.classeService.listar().subscribe(dados => {
      this.classes = dados,
      console.log(this.classes);
    });
  }

  onConfirmDelete(c){
    this.classeSelecionada = c;
    this.classeService.remove(this.classeSelecionada.id).subscribe(
      success => {
        alert('Classe Excluida com Sucesso!'),
        this.listar();
      },
      error => alert('Erro ao remover Classe!')
    );
  }

  
  listar(){
    this.classeService.listar().subscribe(
      (dados) => {
      this.classes = dados;
      }
    );
  }

  salvar() {
    this.classeService.salvar(this.classe);
    this.listar();
  }

  onEdit(id){
    this.router.navigate(['classe',id]);
  }
  

}
