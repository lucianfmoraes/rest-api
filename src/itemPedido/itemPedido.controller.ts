import { ItemPedido } from "./itemPedido.entity";
import { ItemPedidoService } from "./itemPedido.service";
import { CreateItemPedidoInput } from "./dto/create-itemPedido.input";
import { Body, Controller, Get, Post } from "@nestjs/common";


@Controller("/pedido/item")
export class ItemPedidoController{
    constructor(private readonly itemPedidoService: ItemPedidoService){}

    @Get()
    getAllItemPedido(): Promise<ItemPedido[]>{
        return this.itemPedidoService.findAll();
    }

    @Post()
    createItemPedido(@Body()createItemPedidoInput: CreateItemPedidoInput): Promise<ItemPedido>{
        return this.itemPedidoService.createItemPedido(createItemPedidoInput);
    }

}