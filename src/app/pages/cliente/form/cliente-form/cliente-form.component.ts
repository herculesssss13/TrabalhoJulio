import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from '../../models/Cliente';
import { ClienteService } from '../../services/cliente.service';
import { Location} from '@angular/common';

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
  
  constructor(private clienteServico:ClienteService, private fb:FormBuilder,private location:Location) { }

  ngOnInit() {
    this.cliente = new Cliente();
    this.form = this.fb.group({
      nome:[null,[Validators.required, Validators.minLength(1),Validators.maxLength(250)]],
      dataNascimento:[null],
      sexo:[null,[Validators.required, Validators.minLength(1),Validators.maxLength(1)]],
      estahAtivo:[null],
      //cpf:[null],
      //telefone:[null],
      //endereco:[null]
    });
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    if(this.form.valid){
      this.clienteServico.create(this.form.value).subscribe(
        sucesso=>{
          alert('Cliente Salvo com Sucesso!');
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
    this.clienteServico.salvar(this.cliente);
  }



}
