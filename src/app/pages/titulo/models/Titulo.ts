import { Ator } from '../../ator/models/Ator';
import { Diretor } from '../../diretor/models/Diretor';
import { Classe } from '../../classe/models/Classe';

export class Titulo  {
    id:number;
    nome: string;
    listAtores: Ator[];
    diretor: Diretor;
    ano: string;
    sinopse:string;
    categoria:string;
    classe:Classe
    
  }
