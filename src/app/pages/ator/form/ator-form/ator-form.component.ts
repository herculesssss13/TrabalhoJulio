import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ator } from '../../models/Ator';
import { AtorFormService } from '../../services/ator-form.service';
import { Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-ator-form',
  templateUrl: './ator-form.component.html',
  styleUrls: ['./ator-form.component.css']
})
export class AtorFormComponent implements OnInit {
  
  
  
  public ator:Ator;
  form: FormGroup;
  submitted =false;

  constructor(private atorService: AtorFormService,private fb:FormBuilder,private location:Location,private route:ActivatedRoute) { }

  ngOnInit() {
    
    const ator = this.route.snapshot.data['ator'];

    //this.ator = new Ator();
    this.form = this.fb.group({
      id:[ator.id],
      nome:[ator.nome,[Validators.required, Validators.minLength(1),Validators.maxLength(250)]]
    });
  }


  onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    if(this.form.valid){
      let MgsSucesso = 'Ator Criado com Sucesso!';
      let MgsError = 'Erro ao Criar Ator,tente novamente!';

      if(this.form.value.id){
        MgsSucesso = 'Ator Alterado com Sucesso!';
        MgsError = 'Erro ao atualizar Ator,tente novamente!';
      }

      this.atorService.save(this.form.value).subscribe(
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
