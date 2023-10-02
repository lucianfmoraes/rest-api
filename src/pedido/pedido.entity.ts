import { ItemPedido } from "src/itemPedido/itemPedido.entity";
import { User } from "src/user/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Pedido{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "datetime",
        unique: false,
        nullable: false,

    })
    dt_Insert: Date;

    @Column({
        type: "float",
        unique: false,
        nullable: true
    })    total_Value: number;

    @Column()
    userId: number;
    
    @ManyToOne(() => User, user => user.pedidos)
    user: User

    @OneToMany(() => ItemPedido, itemPedido => itemPedido.pedido)
    ItensPedido?: ItemPedido[];

}