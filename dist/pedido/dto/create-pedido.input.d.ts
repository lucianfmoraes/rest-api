import { CreateItemPedidoInput } from "src/itemPedido/dto/create-itemPedido.input";
export interface CreatePedidoInput {
    dt_insert: Date;
    total_value: number;
    user_id: number;
    itemPedido: CreateItemPedidoInput[];
}
