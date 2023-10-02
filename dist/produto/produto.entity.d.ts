import { ItemPedido } from "src/itemPedido/itemPedido.entity";
export declare class Produto {
    id: number;
    name: string;
    description: string;
    value: number;
    ItensPedido?: ItemPedido[];
}
