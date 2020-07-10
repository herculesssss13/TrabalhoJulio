import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  clientes: Cliente[];
  cliente: Cliente;
  clienteSelecionado:Cliente;
  constructor(private clienteService:ClienteService) { }

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

  salvar() {
    this.clienteService.salvar(this.cliente);
    this.listar();
  }

}
