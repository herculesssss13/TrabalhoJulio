import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Classe } from '../../models/Classe';
import { ClasseService } from '../../services/classe.service';
import { Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';




@Component({
  selector: 'app-classe-form',
  templateUrl: './classe-form.component.html',
  styleUrls: ['./classe-form.component.css']
})
export class ClasseFormComponent implements OnInit {
  currentDate = new Date();
  form: FormGroup;
  submitted =false;
  public classe:Classe;

  constructor(private classeServico:ClasseService,private fb:FormBuilder,private location:Location,private route:ActivatedRoute) { }

  ngOnInit() {
    const classe = this.route.snapshot.data['classe'];

    //this.classe = new Classe();
    this.form = this.fb.group({
      id:[classe.id],
      nome:[classe.nome,[Validators.required, Validators.minLength(1),Validators.maxLength(250)]],
      valor:[classe.valor,[Validators.required, Validators.minLength(1),Validators.maxLength(250)]],
      prazoDevolucao:[classe.prazoDevolucao]
    });
  }

  
  

  onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    if(this.form.valid){
      let MgsSucesso = 'Classe Criada com Sucesso!';
      let MgsError = 'Erro ao Criar Classe,tente novamente!';

      if(this.form.value.id){
        MgsSucesso = 'Classe Alterada com Sucesso!';
        MgsError = 'Erro ao atualizar Classe,tente novamente!';
      }

      this.classeServico.save(this.form.value).subscribe(
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
    this.classeServico.salvar(this.classe);

    
  }


}

export class DemoDatePickerAdaptivePositionComponent {}
