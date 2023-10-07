import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Pedido } from "./pedido.entity";
import { CreatePedidoInput } from "./dto/create-pedido.input";
import { CreatePedidoFullInput } from './dto/create-pedido.full.input';
import { ItemPedido } from "../itemPedido/itemPedido.entity";
import { CreateItemPedidoInput } from "../itemPedido/dto/create-itemPedido.input";
import { throws } from "assert";


@Injectable()
export class PedidoService{

    constructor(
        @Inject('PEDIDO_REPOSITORY')
        private pedidoRepository: Repository<Pedido>,

        @Inject('ITEM_PEDIDO_REPOSITORY')
        private itenPedidoRepository: Repository<ItemPedido>,
    ){}

    async findAll(): Promise<Pedido[]>{
        return this.pedidoRepository.find();
    }

    createPedido(createPedidoInput: CreatePedidoInput):Promise<Pedido>{
        const  newPedido = this.pedidoRepository.create(createPedidoInput);

        return this.pedidoRepository.save(newPedido);
    }

    async createPedidoFull(createPedidoInput: CreatePedidoFullInput): Promise<CreatePedidoFullInput>{

        let pedido = this.handlePedido(createPedidoInput);
        let pedidoToBeSaved = this.pedidoRepository.create(pedido);
        let pedidoSaved = await this.pedidoRepository.save(pedidoToBeSaved);
        
        let itensPedidoList = this.handleItensPedido(createPedidoInput.itemPedido, pedidoSaved)
        let  newPedido = this.itenPedidoRepository.create(itensPedidoList);
        
        this.itenPedidoRepository.save(newPedido);

        return createPedidoInput;
    }

    private handlePedido(pedidoFullInput: CreatePedidoFullInput): CreatePedidoInput {
        let pedido: CreatePedidoInput;
        pedido.dt_Insert = pedidoFullInput.dt_insert;
        pedido.userId = pedidoFullInput.user_id
        return pedido;
    }

    private handleItensPedido(itensPedido: CreateItemPedidoInput[], pedido: Pedido): CreateItemPedidoInput[] {
        return itensPedido.map((itemPedido, index) => {
            itemPedido.pedidoId = pedido.id
            return itemPedido
        })
    }

}