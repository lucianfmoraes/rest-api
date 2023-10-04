import { Module } from "@nestjs/common";
import { PedidoService } from "./pedido.service";
import { DatabaseModule } from "src/database/database.module";
import { pedidoProvider } from "./pedido.provider";
import { UserModule } from "src/user/user.module";
import { PedidoController } from "./pedido.controller";


@Module({
    imports: [DatabaseModule,UserModule],
    controllers: [PedidoController],
    providers: [...pedidoProvider, PedidoService],

})
export class PedidoModule {}
