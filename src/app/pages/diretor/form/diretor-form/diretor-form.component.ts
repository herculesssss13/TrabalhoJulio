import { DiretorService } from './../../services/diretor.service';
import { Diretor } from './../../models/Diretor';
import { FormGroup, FormBuilder, MaxLengthValidator, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';


@Component({
  selector: 'app-diretor-form',
  templateUrl: './diretor-form.component.html',
  styleUrls: ['./diretor-form.component.css']
})
export class DiretorFormComponent implements OnInit {
  public exibir: boolean;
  public header: string;
  public formDiretor: FormGroup;
  public diretor:Diretor;
  form: FormGroup;
  submitted =false;

  constructor(private diretorServico:DiretorService,private fb:FormBuilder,private location:Location) { }

  ngOnInit(): void {
    this.exibir = false;
    this.header = '';
    this.diretor = new Diretor();
    this.form = this.fb.group({
      nome:[null,[Validators.required, Validators.minLength(1),Validators.maxLength(250)]]
    });
   
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    if(this.form.valid){
      this.diretorServico.create(this.form.value).subscribe(
        sucesso=>{
          alert('Diretor Salvo com Sucesso!');
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
    this.diretorServico.salvar(this.diretor);
    this.exibir=false;
    
  }

  cadastar(diretor:Diretor) {
    this.exibir=false;
  }

  cancelar() {
    this.exibir = false;
  }

  openDialog(edicao: boolean, id: number) {
      this.exibir = true;

  }
}
