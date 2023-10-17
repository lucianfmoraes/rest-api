import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Pedido } from "./pedido.entity";
import { CreatePedidoInput } from "./dto/create-pedido.input";
import { ItemPedido } from "../itemPedido/itemPedido.entity";
import { CreateItemPedidoInput } from "../itemPedido/dto/create-itemPedido.input";

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

    async createPedido(createPedidoInput: CreatePedidoInput): Promise<CreatePedidoInput>{

        let pedido = this.handlePedido(createPedidoInput);
        let pedidoToBeSaved = this.pedidoRepository.create(pedido);
        let pedidoSaved = await this.pedidoRepository.save(pedidoToBeSaved);
        
        let itensPedidoList = this.handleItensPedido(createPedidoInput.itemPedido, pedidoSaved)
        let  newPedido = this.itenPedidoRepository.create(itensPedidoList);
        
        this.itenPedidoRepository.save(newPedido);

        return createPedidoInput;
    }

    private handlePedido(pedidoInput: CreatePedidoInput): CreatePedidoInput {
        let pedido = {
            dt_insert: pedidoInput.dt_insert, 
            user_id: pedidoInput.user_id,
            total_value: pedidoInput.total_value,
            itemPedido: pedidoInput.itemPedido
            
        };
        return pedido;
    }

    private handleItensPedido(itensPedido: CreateItemPedidoInput[], pedido: Pedido): CreateItemPedidoInput[] {
        return itensPedido.map((itemPedido, index) => {
            itemPedido.pedidoId = pedido.id
            return itemPedido
        })
    }

}