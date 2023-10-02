import { ItemPedido } from "./itemPedido.entity";
import { ItemPedidoService } from "./itemPedido.service";
import { CreateItemPedidoInput } from "./dto/create-itemPedido.input";
export declare class ItemPedidoController {
    private readonly itemPedidoService;
    constructor(itemPedidoService: ItemPedidoService);
    getAllItemPedido(): Promise<ItemPedido[]>;
    createItemPedido(createItemPedidoInput: CreateItemPedidoInput): Promise<ItemPedido>;
}
