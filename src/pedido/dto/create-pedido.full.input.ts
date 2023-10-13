import { ItemPedido } from "src/itemPedido/itemPedido.entity";
import { CreateItemPedidoInput } from "src/itemPedido/dto/create-itemPedido.input";
import { CreatePedidoInput } from "./create-pedido.input";

export interface CreatePedidoFullInput{
    dt_insert: Date
    total_value: number
    user_id: number
    itemPedido: CreateItemPedidoInput[]
}
