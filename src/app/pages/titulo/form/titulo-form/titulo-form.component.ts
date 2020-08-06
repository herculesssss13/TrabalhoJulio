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
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from "rxjs/operators";

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
              private classeService:ClasseService,
              private route:ActivatedRoute
              ) { }

              
  ngOnInit(){
    const titulo = this.route.snapshot.data['titulo'];

    //this.titulo = new Titulo();
    this.form = this.fb.group({
      id:[titulo.id],
      nome:[titulo.nome,[Validators.required, Validators.minLength(1),Validators.maxLength(250)]],
      atores:[titulo.atores],
      diretor:[titulo.diretor],
      classe:[titulo.classe],
      ano:[titulo.ano,[Validators.required, Validators.minLength(1),Validators.maxLength(250)]],
      sinopse:[titulo.sinopse,[Validators.required, Validators.minLength(1),Validators.maxLength(250)]],
      categoria:[titulo.categoria]
    });

    this.atorService.listar().subscribe(dados => this.atores = dados);
    this.diretorService.listar().subscribe(dados => this.diretores = dados);
    this.classeService.listar().subscribe(dados => this.classes = dados);
  }

  

  onSubmit(){
    this.submitted = true;
    console.log(this.form.value);
    if(this.form.valid){
      let MgsSucesso = 'Titulo Criado com Sucesso!';
      let MgsError = 'Erro ao Criar Titulo,tente novamente!';

      if(this.form.value.id){
        MgsSucesso = 'Titulo Alterado com Sucesso!';
        MgsError = 'Erro ao atualizar Titulo,tente novamente!';
      }

      this.tituloService.save(this.form.value).subscribe(
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
