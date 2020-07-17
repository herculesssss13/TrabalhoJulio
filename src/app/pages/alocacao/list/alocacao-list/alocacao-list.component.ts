import { Component, OnInit } from '@angular/core';
import { Alocacao } from '../../models/Alocacao';
import { AlocacaoService } from '../../services/alocacao.service';

@Component({
  selector: 'app-alocacao-list',
  templateUrl: './alocacao-list.component.html',
  styleUrls: ['./alocacao-list.component.css']
})
export class AlocacaoListComponent implements OnInit {
  alocacao: Alocacao;
  alocacoes: Alocacao[];
  alocacaoSelecionada: Alocacao;

  constructor(private alocacaoService: AlocacaoService) { }

  ngOnInit() {
    this.alocacao = new Alocacao();
    this.alocacaoService.listar().subscribe(dados => {
      this.alocacoes = dados,
      console.log(this.alocacoes);
    });
  }

  onConfirmDelete(c){
    this.alocacaoSelecionada = c;
    this.alocacaoService.remove(this.alocacaoSelecionada.id).subscribe(
      success => {
        alert('Locação Excluida com Sucesso!'),
        this.listar();
      },
      error => alert('Erro ao remover Classe!')
    );
  }

  listar(){
    this.alocacaoService.listar().subscribe(
      (dados) => {
      this.alocacoes = dados;
      }
    );
  }

  salvar() {
    this.alocacaoService.salvar(this.alocacao);
    this.listar();
  }


}
