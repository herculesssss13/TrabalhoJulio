import { DependenteService } from './../../../dependente/services/dependente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/Cliente';
import { ClienteService } from '../../services/cliente.service';
import { Dependente } from 'src/app/pages/dependente/models/Dependente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  clientes: Cliente[];
  cliente: Cliente;
  clienteSelecionado: Cliente;


  constructor(private clienteService: ClienteService, private dependenteService: DependenteService,private router : Router) { }

  ngOnInit(){
    this.cliente = new Cliente();
    this.clienteService.listar().subscribe(dados => this.clientes = dados);
  }

  onConfirmDelete(c){
    this.clienteSelecionado = c;
    this.clienteService.remove(this.clienteSelecionado.numInscricao).subscribe(
      success => {
        alert('Cliente Excluido com Sucesso!'),
        this.listar();
      },
      error => alert('Erro ao remover Cliente!')
    );
  }


  listar(){
    this.clienteService.listar().subscribe(
      (dados) => {
      this.clientes = dados;
      }
    );
  }


  onEdit(id){
    this.router.navigate(['cliente',id]);
  }

}
