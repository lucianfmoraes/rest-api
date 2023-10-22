import { CreateItemPedidoInput } from "src/itemPedido/dto/create-itemPedido.input"

export interface FindPedidoResponse {
    id: number,
    dt_insert: Date,
    total_value: number,
    user_id: number,
    itensPedido: CreateItemPedidoInput[]

}
