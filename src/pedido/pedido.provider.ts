import { DataSource } from "typeorm";
import { Pedido } from "./pedido.entity";
import { itemPedidoProvider } from "src/itemPedido/itemPedido.provider";
import { produtoProvider } from "src/produto/produto.provider";

export const pedidoProvider = [
    {
      provide: 'PEDIDO_REPOSITORY',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(Pedido),
      inject: ['DATA_SOURCE'],
    },
    itemPedidoProvider[0],
    produtoProvider[0]
  ];
  