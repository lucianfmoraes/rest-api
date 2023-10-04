import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { itemPedidoProvider } from "./itemPedido.provider";
import { ItemPedidoService } from "./itemPedido.service";
import { ProdutoModule } from "src/produto/produto.module";
import { PedidoModule } from "src/pedido/pedido.module";
import { ItemPedidoController } from "./itemPedido.controller";

@Module({
    imports: [DatabaseModule,ProdutoModule,PedidoModule],
    controllers: [ItemPedidoController],
    providers: [...itemPedidoProvider, ItemPedidoService],
  })
export class ItemPedidoModule{}