import { Pedido } from 'src/pedido/pedido.entity';
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    active: number;
    pedidos?: Pedido[];
    hashPassword(): Promise<void>;
}
