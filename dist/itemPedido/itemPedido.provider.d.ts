import { DataSource } from "typeorm";
import { ItemPedido } from "./itemPedido.entity";
export declare const itemPedidoProvider: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<ItemPedido>;
    inject: string[];
}[];
