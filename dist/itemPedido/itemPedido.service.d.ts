import { Repository } from 'typeorm';
import { ItemPedido } from './itemPedido.entity';
import { CreateItemPedidoInput } from './dto/create-itemPedido.input';
export declare class ItemPedidoService {
    private itemPedidoRepository;
    constructor(itemPedidoRepository: Repository<ItemPedido>);
    findAll(): Promise<ItemPedido[]>;
    createItemPedido(createItemPedidoInput: CreateItemPedidoInput): Promise<ItemPedido>;
}
