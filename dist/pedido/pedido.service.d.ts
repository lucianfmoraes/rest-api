import { Repository } from "typeorm";
import { Pedido } from "./pedido.entity";
import { CreatePedidoInput } from "./dto/create-pedido.input";
export declare class PedidoService {
    private pedidoRepository;
    constructor(pedidoRepository: Repository<Pedido>);
    findAll(): Promise<Pedido[]>;
    createPedido(createPedidoInput: CreatePedidoInput): Promise<Pedido>;
}
