import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';
import { DependenteService } from '../../services/dependente.service';
import { Dependente } from '../../models/Dependente';
import { ClienteService } from 'src/app/pages/cliente/services/cliente.service';
import { Cliente } from 'src/app/pages/cliente/models/Cliente';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-dependente-form',
  templateUrl: './dependente-form.component.html',
  styleUrls: ['./dependente-form.component.css']
})
export class DependenteFormComponent implements OnInit {
  currentDate = new Date();
  form: FormGroup;
  submitted = false;
  public dependente: Dependente;
  socios:Cliente[];
  constructor(private dependenteServico: DependenteService, 
              private fb: FormBuilder, 
              private location: Location,
              private clienteServico:ClienteService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    const dependente = this.route.snapshot.data['dependente'];

    //this.dependente = new Dependente();
    this.form = this.fb.group({
      numInscricao:[dependente.numInscricao],
      nome:[dependente.nome,[Validators.required, Validators.minLength(1),Validators.maxLength(250)]],
      dataNascimento:[dependente.dataNascimento],
      sexo:[dependente.sexo,[Validators.required, Validators.minLength(1),Validators.maxLength(1)]],
      estahAtivo:[dependente.estahAtivo],
      socio:[dependente.socio]
    });

    this.clienteServico.listar().subscribe(dados => 
      {this.socios = dados;
        console.log(this.socios);
      });
  }


  onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    if(this.form.valid){
      let MgsSucesso = 'Dependente Criado com Sucesso!';
      let MgsError = 'Erro ao Criar Dependente,tente novamente!';

      if(this.form.value.numInscricao){
        MgsSucesso = 'Dependente Alterado com Sucesso!';
        MgsError = 'Erro ao atualizar Dependente,tente novamente!';
      }

      this.dependenteServico.save(this.form.value).subscribe(
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
    this.dependenteServico.salvar(this.dependente);
  }


}
