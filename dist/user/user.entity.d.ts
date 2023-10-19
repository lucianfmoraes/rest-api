import { Pedido } from 'src/pedido/pedido.entity';
import { CreateUserInput } from './dto/create-user.input';
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    active: number;
    pedidos?: Pedido[];
    toDomain(): CreateUserInput;
}
