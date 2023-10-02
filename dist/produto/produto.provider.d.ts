import { DataSource } from 'typeorm';
import { Produto } from './produto.entity';
export declare const produtoProvider: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Produto>;
    inject: string[];
}[];
