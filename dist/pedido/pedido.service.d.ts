import { Repository } from "typeorm";
import { Pedido } from "./pedido.entity";
import { CreatePedidoInput } from "./dto/create-pedido.input";
import { ItemPedido } from "../itemPedido/itemPedido.entity";
export declare class PedidoService {
    private pedidoRepository;
    private itenPedidoRepository;
    constructor(pedidoRepository: Repository<Pedido>, itenPedidoRepository: Repository<ItemPedido>);
    findAll(): Promise<Pedido[]>;
    createPedido(createPedidoInput: CreatePedidoInput): Promise<CreatePedidoInput>;
    private handlePedido;
    private handleItensPedido;
}
