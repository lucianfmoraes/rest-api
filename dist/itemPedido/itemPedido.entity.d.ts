import { Pedido } from "src/pedido/pedido.entity";
import { Produto } from "src/produto/produto.entity";
export declare class ItemPedido {
    id: number;
    quantity: number;
    totalValue: number;
    uniqueValue: number;
    pedidoId: number;
    pedido: Pedido;
    produtoId: number;
    produto: Produto;
}
