import { Cliente } from '../../cliente/models/Cliente';

export class Dependente {
  numInscricao: number;
  nome: string;
  dataNascimento: Date;
  sexo: string[1];
  estahAtivo: boolean;
  socio:Cliente
}
