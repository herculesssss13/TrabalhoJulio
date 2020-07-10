import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Classe } from '../../models/Classe';
import { ClasseService } from '../../services/classe.service';
import { Location} from '@angular/common';




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

  constructor(private classeServico:ClasseService,private fb:FormBuilder,private location:Location) { }

  ngOnInit() {
    this.classe = new Classe();
    this.form = this.fb.group({
      nome:[null,[Validators.required, Validators.minLength(1),Validators.maxLength(250)]],
      valor:[null,[Validators.required, Validators.minLength(1),Validators.maxLength(250)]]
    });
  }

  
  


  onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    if(this.form.valid){
      this.classeServico.create(this.form.value).subscribe(
        sucesso=>{
          alert('Classe Salva com Sucesso!');
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
    this.classeServico.salvar(this.classe);

    
  }


}
