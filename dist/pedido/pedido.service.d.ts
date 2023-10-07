import { Repository } from "typeorm";
import { Pedido } from "./pedido.entity";
import { CreatePedidoInput } from "./dto/create-pedido.input";
import { CreatePedidoFullInput } from './dto/create-pedido.full.input';
import { ItemPedido } from "../itemPedido/itemPedido.entity";
export declare class PedidoService {
    private pedidoRepository;
    private itenPedidoRepository;
    constructor(pedidoRepository: Repository<Pedido>, itenPedidoRepository: Repository<ItemPedido>);
    findAll(): Promise<Pedido[]>;
    createPedido(createPedidoInput: CreatePedidoInput): Promise<Pedido>;
    createPedidoFull(createPedidoInput: CreatePedidoFullInput): Promise<CreatePedidoFullInput>;
    private handlePedido;
    private handleItensPedido;
}
