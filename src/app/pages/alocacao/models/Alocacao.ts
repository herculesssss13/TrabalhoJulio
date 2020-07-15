import { Item } from '../../item/models/Item';
import { Cliente } from '../../cliente/models/Cliente';

export class Alocacao{
    id: number;
    item: Item;
    cliente: Cliente;
    valorCobrado: number;
    dataDevolucaoPrevista: Date;
}
