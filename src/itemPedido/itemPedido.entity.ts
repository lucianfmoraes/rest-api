import { Pedido } from "src/pedido/pedido.entity";
import { Produto } from "src/produto/produto.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ItemPedido{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number;
    
    // @Column({
    //     type: "float",
    //     unique: false,
    //     nullable: true
    // })
    // totalValue: number;

    // @Column({
    //     type: "float",
    //     unique: false,
    //     nullable: true
    // })
    // uniqueValue: number;

    @Column()
    pedidoId: number;
  
    @ManyToOne(() => Pedido, pedido => pedido.ItensPedido)
    pedido: Pedido;

    @Column()
    produtoId: number;

    @ManyToOne(() => Produto, produto => produto.ItensPedido)
    produto: Produto;

  }


