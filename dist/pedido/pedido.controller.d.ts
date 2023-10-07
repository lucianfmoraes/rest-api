import { PedidoService } from './pedido.service';
import { CreatePedidoInput } from './dto/create-pedido.input';
import { Pedido } from './pedido.entity';
import { CreatePedidoFullInput } from './dto/create-pedido.full.input';
export declare class PedidoController {
    private readonly pedidoService;
    constructor(pedidoService: PedidoService);
    getAllPedido(): Promise<Pedido[]>;
    createPedido(createPedidoInput: CreatePedidoInput): Promise<Pedido>;
    createPedidoFull(createPedidoInput: CreatePedidoFullInput): Promise<CreatePedidoFullInput>;
}
