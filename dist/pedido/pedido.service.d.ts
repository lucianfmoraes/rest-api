import { Repository } from "typeorm";
import { Pedido } from "./pedido.entity";
import { CreatePedidoInput } from "./dto/create-pedido.input";
import { ItemPedido } from "../itemPedido/itemPedido.entity";
import { Produto } from "src/produto/produto.entity";
export declare class PedidoService {
    private pedidoRepository;
    private itenPedidoRepository;
    private produtoRepository;
    constructor(pedidoRepository: Repository<Pedido>, itenPedidoRepository: Repository<ItemPedido>, produtoRepository: Repository<Produto>);
    findAll(): Promise<Pedido[]>;
    createPedido(createPedidoInput: CreatePedidoInput): Promise<Pedido[]>;
}
