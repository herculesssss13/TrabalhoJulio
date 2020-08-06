import { DiretorService } from './../../services/diretor.service';
import { Diretor } from './../../models/Diretor';
import { FormGroup, FormBuilder, MaxLengthValidator, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';


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

  constructor(private diretorServico:DiretorService,private fb:FormBuilder,private location:Location,private route:ActivatedRoute) { }

  ngOnInit(){
    const diretor = this.route.snapshot.data['diretor'];

    //this.diretor = new Diretor();
    this.form = this.fb.group({
      id:[diretor.id],
      nome:[diretor.nome,[Validators.required, Validators.minLength(1),Validators.maxLength(250)]]
    });
   
  }

  

  onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    if(this.form.valid){
      let MgsSucesso = 'Diretor Criado com Sucesso!';
      let MgsError = 'Erro ao Criar Diretor,tente novamente!';

      if(this.form.value.id){
        MgsSucesso = 'Diretor Alterado com Sucesso!';
        MgsError = 'Erro ao atualizar Diretor,tente novamente!';
      }

      this.diretorServico.save(this.form.value).subscribe(
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
