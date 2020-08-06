import { Dependente } from '../../models/Dependente';
import { Component, OnInit } from '@angular/core';
import { DependenteService } from '../../services/dependente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dependente-list',
  templateUrl: './dependente-list.component.html',
  styleUrls: ['./dependente-list.component.css']
})
export class DependenteListComponent implements OnInit {
  dependentes: Dependente[];
  dependente: Dependente;
  dependenteSelecionado: Dependente;
  constructor(private dependenteService: DependenteService,private router : Router) { }

  ngOnInit() {
    this.dependente = new Dependente();
    this.dependenteService.listar().subscribe(dados => this.dependentes = dados);
  }

  onConfirmDelete(s){
    this.dependenteSelecionado = s;
    this.dependenteService.remove(this.dependenteSelecionado.numInscricao).subscribe(
      success => {
        alert('Dependente Excluido com Sucesso!'),
        this.listar();
      },
      error => alert('Erro ao remover Dependente!')
    );
  }


  listar(){
    this.dependenteService.listar().subscribe(
      (dados) => {
      this.dependentes = dados;
      }
    );
  }

  salvar() {
    this.dependenteService.salvar(this.dependente);
    this.listar();
  }

  onEdit(id){
    this.router.navigate(['dependente',id]);
  }
}
