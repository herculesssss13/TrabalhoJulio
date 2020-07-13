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
<<<<<<< HEAD
 
 
=======


>>>>>>> 9450c93738cc713926751f48b83ebd2629f269be
  tituloSelecionado:Titulo;
  @ViewChild('deleteModal') deleteModal;

  constructor(private tituloService: TituloService) { }

  ngOnInit(){
<<<<<<< HEAD
   
    this.tituloService.listar().subscribe(dados => 
=======

    this.tituloService.listar().subscribe(dados =>
>>>>>>> 9450c93738cc713926751f48b83ebd2629f269be
      {this.titulos = dados,
      console.log(this.titulos);
      }
      );
<<<<<<< HEAD
    
=======

>>>>>>> 9450c93738cc713926751f48b83ebd2629f269be
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

<<<<<<< HEAD
    
  }

  
=======

  }


>>>>>>> 9450c93738cc713926751f48b83ebd2629f269be
  listar(){
    this.tituloService.listar().subscribe(
      (dados) => {
      this.titulos = dados;
<<<<<<< HEAD
      
      }
    );
  }
  
=======
      }
    );
  }

>>>>>>> 9450c93738cc713926751f48b83ebd2629f269be

}
