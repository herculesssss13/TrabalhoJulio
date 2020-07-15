import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Item } from '../../models/Item';
import { Titulo } from 'src/app/pages/titulo/models/Titulo';
import { ItemService } from '../../services/item.service';
import { TituloService } from 'src/app/pages/titulo/services/titulo.service';
import { Location} from '@angular/common';

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
              private location:Location) { }

  ngOnInit(){
    
    this.form = this.fb.group({
      titulo:[null],
      tipo:[null],
      dataAquisicao:[null]
    });

    this.tituloService.listar().subscribe(dados => this.titulos = dados);
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    if(this.form.valid){
      this.itemService.create(this.form.value).subscribe(
        sucesso=>{
          alert('Item Salvo com Sucesso!');
          this.location.back();
        },
        error => console.error(error),
        ()=> console.log('Request completa')
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