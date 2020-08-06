import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Item } from '../../models/Item';
import { Titulo } from 'src/app/pages/titulo/models/Titulo';
import { ItemService } from '../../services/item.service';
import { TituloService } from 'src/app/pages/titulo/services/titulo.service';
import { Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  form: FormGroup;
  submitted =false;
  tipos: String[] = ['Fita', 'DVD', ' BlueRay'];
  item: Item;
  titulos:Titulo[];


  constructor(private itemService : ItemService, 
              private tituloService : TituloService,
              private fb:FormBuilder,
              private location:Location,
              private route:ActivatedRoute) { }

  ngOnInit(){
    
    const item = this.route.snapshot.data['item'];

    this.form = this.fb.group({
      numSerie:[item.numSerie],
      titulo:[item.titulo],
      tipo:[item.tipo],
      dataAquisicao:[item.dataAquisicao]
    });

    this.tituloService.listar().subscribe(dados => this.titulos = dados);
  }



  onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    if(this.form.valid){
      let MgsSucesso = 'Item Criado com Sucesso!';
      let MgsError = 'Erro ao Criar Item,tente novamente!';

      if(this.form.value.numSerie){
        MgsSucesso = 'Item Alterado com Sucesso!';
        MgsError = 'Erro ao atualizar Item,tente novamente!';
      }

      this.itemService.save(this.form.value).subscribe(
        sucesso =>{
          alert(MgsSucesso);
          this.location.back();
        },
        error => console.error(MgsError)
      );
    }
  }

  onCancel(){
    this.submitted = false;
    this.form.reset();
    this.location.back();
  
  }

  hasError(field:string){
    return this.form.get(field).errors;
  }


}


export class DemoDatePickerAdaptivePositionComponent {}