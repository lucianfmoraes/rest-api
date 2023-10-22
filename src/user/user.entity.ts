import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Pedido } from 'src/pedido/pedido.entity';
import { CreateUserInput } from './dto/create-user.input';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar",
        length: 255,
        unique: false,
        nullable: false
    })

    name: string;

    @Column({
        type: "varchar",
        length: 255,
        unique: true,
        nullable: false
    })
    email: string;

    @Column({
        type: "varchar",
        length: 100,
        unique: false,
        nullable: false
    })
    password: string;

    @Column({
        type: "bit",
        unique: false,
        nullable: false,
    })
    active: number;

    @OneToMany(() => Pedido, pedido => pedido.user)
    pedidos?: Pedido[];


    public toDomain(): CreateUserInput {
        let createUserInput: CreateUserInput = {
            name: this.name,
            email: this.email,
            password: this.password,
            active: this.active
        }
        return createUserInput;
    }
}