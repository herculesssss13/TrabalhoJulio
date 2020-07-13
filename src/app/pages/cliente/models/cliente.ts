import { Dependente } from './../../dependente/models/Dependente';

export class Cliente {
    numInscricao: number;
    nome: string;
    dataNascimento: Date;
    sexo: string[1];
    estahAtivo: boolean;
    cpf: string;
    endereco: string;
    telefone: string;
    dependentes: Dependente[];
  }

