import { Component, OnInit } from '@angular/core';
import { Titulo } from '../../models/Titulo';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TituloService } from '../../services/titulo.service';
import { Location} from '@angular/common';
import { AtorFormService } from 'src/app/pages/ator/services/ator-form.service';
import { Diretor } from 'src/app/pages/diretor/models/Diretor';
import { Ator } from 'src/app/pages/ator/models/Ator';
import { DiretorService } from 'src/app/pages/diretor/services/diretor.service';
import { Classe } from 'src/app/pages/classe/models/Classe';
import { ClasseService } from 'src/app/pages/classe/services/classe.service';

@Component({
  selector: 'app-titulo-form',
  templateUrl: './titulo-form.component.html',
  styleUrls: ['./titulo-form.component.css']
})
export class TituloFormComponent implements OnInit {
  public titulo:Titulo;
  form: FormGroup;
  submitted =false;
  toppings = new FormControl();
  categorias: String[] = ['Ação', 'Terror', 'Comédia', 'Suspense', 'Drama', 'Bibliografia'];
  atores: Ator[];
  diretores:Diretor[];
  classes:Classe[];

  constructor(private tituloService:TituloService,
              private fb:FormBuilder,
              private location:Location,
              private atorService:AtorFormService,
              private diretorService:DiretorService,
              private classeService:ClasseService
              ) { }

              
  ngOnInit(){
    this.titulo = new Titulo();
    this.form = this.fb.group({
      nome:[null,[Validators.required, Validators.minLength(1),Validators.maxLength(250)]],
      atores:[null],
      diretor:[null],
      classe:[null],
      ano:[null,[Validators.required, Validators.minLength(1),Validators.maxLength(250)]],
      sinopse:[null,[Validators.required, Validators.minLength(1),Validators.maxLength(250)]],
      categoria:[null]
    });

    this.atorService.listar().subscribe(dados => this.atores = dados);
    this.diretorService.listar().subscribe(dados => this.diretores = dados);
    this.classeService.listar().subscribe(dados => this.classes = dados);
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    if(this.form.valid){
      this.tituloService.create(this.form.value).subscribe(
        sucesso=>{
          alert('Título Salvo com Sucesso!');
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
