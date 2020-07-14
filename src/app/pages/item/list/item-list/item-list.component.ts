import { Component, OnInit, ViewChild } from '@angular/core';
import { Item } from '../../models/Item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @ViewChild('deleteModal') deleteModal;
  itens:Item[];
  itemSelecionado:Item;

  constructor(private itemService :ItemService) { }

  ngOnInit(){

    this.itemService.listar().subscribe(dados =>
      {this.itens = dados,
      console.log(this.itens);
      }
      );
  }

  onConfirmDelete(item){
    this.itemSelecionado = item;
    this.itemService.remove(this.itemSelecionado.numSerie).subscribe(
      success => {
        alert('Item Excluido com Sucesso!'),
        this.listar();
      },
      error => alert('Erro ao remover Item!')
    );


  }


  listar(){
    this.itemService.listar().subscribe(
      (dados) => {
      this.itens = dados;
      }
    );
  }


}
