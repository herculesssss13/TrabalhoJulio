import { DependenteService } from './../../../dependente/services/dependente.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from '../../models/Cliente';
import { ClienteService } from '../../services/cliente.service';
import { Location} from '@angular/common';
import { Dependente } from 'src/app/pages/dependente/models/Dependente';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  currentDate = new Date();
  form: FormGroup;
  submitted =false;
  public cliente:Cliente;

 

  constructor(private clienteServico: ClienteService, private dependenteService: DependenteService,
     private fb: FormBuilder, private location: Location,private route:ActivatedRoute) { }

  ngOnInit() {
    const cliente = this.route.snapshot.data['cliente'];

    //this.cliente = new Cliente();
    this.form = this.fb.group({
      numInscricao:[cliente.numInscricao],
      nome:[cliente.nome],
      dataNascimento:[cliente.dataNascimento],
      sexo:[cliente.sexo,[Validators.required, Validators.minLength(1),Validators.maxLength(1)]],
      estahAtivo:[cliente.estahAtivo],
      cpf:[cliente.cpf],
      endereco:[cliente.endereco],
      telefone:[cliente.telefone]
    });
  }

  

  onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    if(this.form.valid){
      let MgsSucesso = 'Cliente Criado com Sucesso!';
      let MgsError = 'Erro ao Criar Cliente,tente novamente!';

      if(this.form.value.numInscricao){
        MgsSucesso = 'Cliente Alterado com Sucesso!';
        MgsError = 'Erro ao atualizar Cliente,tente novamente!';
      }

      this.clienteServico.save(this.form.value).subscribe(
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
