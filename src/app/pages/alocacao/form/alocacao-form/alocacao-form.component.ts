import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Alocacao } from '../../models/Alocacao';
import { Location} from '@angular/common';
import { AlocacaoService } from '../../services/alocacao.service';
import { ClienteService } from 'src/app/pages/cliente/services/cliente.service';
import { ItemService } from 'src/app/pages/item/services/item.service';
import { Item } from 'src/app/pages/item/models/Item';
import { Cliente } from 'src/app/pages/cliente/models/Cliente';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';


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
              private itemService:ItemService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    const alocacao = this.route.snapshot.data['alocacao'];


    //this.alocacao = new Alocacao();
    this.form = this.fb.group({
      id:[alocacao.id],
      item:[alocacao.item,[Validators.required, Validators.minLength(1),Validators.maxLength(250)]],
      cliente:[alocacao.cliente],
      valorCobrado:[alocacao.valorCobrado],
      dataDevolucaoPrevista:[alocacao.dataDevolucaoPrevista]
    });

    this.clienteService.listar2().subscribe(dados => {
      this.clientes = dados;
      console.log( this.clientes);
    });
    this.itemService.listar().subscribe(dados => this.itens = dados);
  }


  onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    if(this.form.valid){
      let MgsSucesso = 'Locação Criada com Sucesso!';
      let MgsError = 'Erro ao Criar Locação,tente novamente!';

      if(this.form.value.id){
        MgsSucesso = 'Locação Alterada com Sucesso!';
        MgsError = 'Erro ao atualizar Locação,tente novamente!';
      }

      this.alocacaoService.save(this.form.value).subscribe(
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

  salvar() {
    this.alocacaoService.salvar(this.alocacao);
  }

}
export class DemoDatePickerAdaptivePositionComponent {}
