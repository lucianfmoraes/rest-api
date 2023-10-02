
import { ItemPedido } from "src/itemPedido/itemPedido.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, } from "typeorm";



@Entity()
export class Produto{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    value: number;

    @OneToMany(() => ItemPedido, itemPedido => itemPedido.pedido)
    ItensPedido?: ItemPedido[];

}