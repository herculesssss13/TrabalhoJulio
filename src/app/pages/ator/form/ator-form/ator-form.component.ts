import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ator } from '../../models/Ator';
import { AtorFormService } from '../../services/ator-form.service';
import { Location} from '@angular/common';

@Component({
  selector: 'app-ator-form',
  templateUrl: './ator-form.component.html',
  styleUrls: ['./ator-form.component.css']
})
export class AtorFormComponent implements OnInit {
  
  
  
  public ator:Ator;
  form: FormGroup;
  submitted =false;

  constructor(private atorService: AtorFormService,private fb:FormBuilder,private location:Location) { }

  ngOnInit(): void {
    this.ator = new Ator();
    this.form = this.fb.group({
      nome:[null,[Validators.required, Validators.minLength(1),Validators.maxLength(250)]]
    });
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    if(this.form.valid){
      this.atorService.create(this.form.value).subscribe(
        sucesso=>{
          alert('Ator Salvo com Sucesso!');
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


}
