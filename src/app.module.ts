import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProdutoModule } from './produto/produto.module';
import { PedidoModule } from './pedido/pedido.module';
import { ItemPedidoModule } from './itemPedido/itemPedido.module';

@Module({
  imports: [
    UserModule, 
    ProdutoModule, 
    PedidoModule, 
    ItemPedidoModule
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
  ],
})
export class AppModule {}
