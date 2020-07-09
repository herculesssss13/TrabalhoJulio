import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Ator } from '../../models/Ator';
import { AtorFormService } from '../../services/ator-form.service';

@Component({
  selector: 'app-ator-form',
  templateUrl: './ator-form.component.html',
  styleUrls: ['./ator-form.component.css']
})
export class AtorFormComponent implements OnInit {
  public exibir: boolean;
  public header: string;
  public formAtor: FormGroup;
  public ator:Ator;

  constructor(private atorService: AtorFormService) { }

  ngOnInit(): void {
    this.exibir = false;
    this.header = '';
    this.ator = new Ator();
  }

  salvar() {
    this.atorService.salvar(this.ator);
    this.exibir=false;
  }

  cadastar(ator:Ator) {
    this.exibir=false;
  }

  cancelar() {
    this.exibir = false;
  }

  openDialog(edicao: boolean, id: number) {
      this.exibir = true;

  }

}
