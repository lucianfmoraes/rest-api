import { ItemPedido } from "src/itemPedido/itemPedido.entity";
import { User } from "src/user/user.entity";
export declare class Pedido {
    id: number;
    dt_insert: Date;
    total_Value: number;
    user_id: number;
    user: User;
    ItensPedido?: ItemPedido[];
}
