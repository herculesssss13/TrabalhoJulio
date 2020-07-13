import { Component, OnInit, ViewChild } from '@angular/core';
import { TituloService } from '../../services/titulo.service';
import { Titulo } from '../../models/Titulo';

@Component({
  selector: 'app-titulo-list',
  templateUrl: './titulo-list.component.html',
  styleUrls: ['./titulo-list.component.css']
})
export class TituloListComponent implements OnInit {
  titulos: Titulo[];


  tituloSelecionado:Titulo;
  @ViewChild('deleteModal') deleteModal;

  constructor(private tituloService: TituloService) { }

  ngOnInit(){

    this.tituloService.listar().subscribe(dados =>
      {this.titulos = dados,
      console.log(this.titulos);
      }
      );

  }

  onConfirmDelete(t){
    this.tituloSelecionado = t;
    this.tituloService.remove(this.tituloSelecionado.id).subscribe(
      success => {
        alert('Titulo Excluido com Sucesso!'),
        this.listar();
      },
      error => alert('Erro ao remover Titulo!')
    );


  }


  listar(){
    this.tituloService.listar().subscribe(
      (dados) => {
      this.titulos = dados;
      }
    );
  }


}
