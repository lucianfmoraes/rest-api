import { DataSource } from "typeorm";
import { Pedido } from "./pedido.entity";
export declare const pedidoProvider: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Pedido>;
    inject: string[];
}[];
