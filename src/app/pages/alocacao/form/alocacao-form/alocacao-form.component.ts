import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Alocacao } from '../../models/Alocacao';
import { Location} from '@angular/common';
import { AlocacaoService } from '../../services/alocacao.service';
import { ClienteService } from 'src/app/pages/cliente/services/cliente.service';
import { ItemService } from 'src/app/pages/item/services/item.service';
import { Item } from 'src/app/pages/item/models/Item';
import { Cliente } from 'src/app/pages/cliente/models/Cliente';

@Component({
  selector: 'app-alocacao-form',
  templateUrl: './alocacao-form.component.html',
  styleUrls: ['./alocacao-form.component.css']
})
export class AlocacaoFormComponent implements OnInit {
  currentDate = new Date();
  form: FormGroup;
  submitted =false;
  public alocacao:Alocacao;
  itens:Item[];
  clientes:Cliente[];

  constructor(private alocacaoService:AlocacaoService,
              private fb:FormBuilder,private location:Location,
              private clienteService: ClienteService,
              private itemService:ItemService) { }

  ngOnInit() {
    this.alocacao = new Alocacao();
    this.form = this.fb.group({
      item:[null,[Validators.required, Validators.minLength(1),Validators.maxLength(250)]],
      idCliente:[null],
      valorCobrado:[null],
      dataDevolucaoPrevista:[null]
    });

    this.clienteService.listar().subscribe(dados => this.clientes = dados);
    this.itemService.listar().subscribe(dados => this.itens = dados);
  }


  onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    if(this.form.valid){
      this.alocacaoService.create(this.form.value).subscribe(
        sucesso=>{
          alert('Alocação Salva com Sucesso!');
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

  salvar() {
    this.alocacaoService.salvar(this.alocacao);

    
  }

}
export class DemoDatePickerAdaptivePositionComponent {}