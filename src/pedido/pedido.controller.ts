import { Body, Controller, Get, Post } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { CreatePedidoInput } from './dto/create-pedido.input';
import { Pedido } from './pedido.entity';

@Controller("/pedido")
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Get()
  getAllPedido(): Promise<Pedido[]> {
    return this.pedidoService.findAll();
  }

  @Post()
  createPedido(@Body() createPedidoInput: CreatePedidoInput ) {
    return this.pedidoService.createPedido(createPedidoInput)
  }

}
