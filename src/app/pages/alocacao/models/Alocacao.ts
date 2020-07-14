import { Item } from '../../item/models/Item';
import { Cliente } from '../../cliente/models/Cliente';

export class Alocacao{
    id:number;
    item:Item;
    socio:Cliente;
    valor:number;
    dataDevolucao:Date;
}