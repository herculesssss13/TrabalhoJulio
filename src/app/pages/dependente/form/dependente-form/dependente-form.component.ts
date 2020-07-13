import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';
import { DependenteService } from '../../services/dependente.service';
import { Dependente } from '../../models/Dependente';


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
  constructor(private dependenteServico: DependenteService, private fb: FormBuilder, private location: Location) { }

  ngOnInit() {
    this.dependente = new Dependente();
    this.form = this.fb.group({
      nome:[null,[Validators.required, Validators.minLength(1),Validators.maxLength(250)]],
      dataNascimento:[null],
      sexo:[null,[Validators.required, Validators.minLength(1),Validators.maxLength(1)]],
      estahAtivo:[null],
    });
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    if(this.form.valid){
      this.dependenteServico.create(this.form.value).subscribe(
        sucesso=>{
          alert('Dependente Salvo com Sucesso!');
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
    this.dependenteServico.salvar(this.dependente);
  }


}
