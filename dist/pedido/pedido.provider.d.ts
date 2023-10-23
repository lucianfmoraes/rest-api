import { DataSource } from "typeorm";
import { Pedido } from "./pedido.entity";
export declare const pedidoProvider: ({
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<import("../produto/produto.entity").Produto>;
    inject: string[];
} | {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<import("../itemPedido/itemPedido.entity").ItemPedido>;
    inject: string[];
} | {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Pedido>;
    inject: string[];
})[];
