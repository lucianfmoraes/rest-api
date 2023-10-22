import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Pedido } from "./pedido.entity";
import { CreatePedidoInput } from "./dto/create-pedido.input";
import { ItemPedido } from "../itemPedido/itemPedido.entity";
import { CreateItemPedidoInput } from "../itemPedido/dto/create-itemPedido.input";
import { Produto } from "src/produto/produto.entity";

@Injectable()
export class PedidoService {

    constructor(
        @Inject('PEDIDO_REPOSITORY')
        private pedidoRepository: Repository<Pedido>,

        @Inject('ITEM_PEDIDO_REPOSITORY')
        private itenPedidoRepository: Repository<ItemPedido>,

        @Inject('PRODUTO_REPOSITORY')
        private produtoRepository: Repository<Produto>,
    ) { }

    async findAll(): Promise<Pedido[]> {
        let pedidos = await this.pedidoRepository.find();
        let qtd: number = 0;
        let pedidosFull = await Promise.all(pedidos.map(async (p): Promise<Pedido> => {
            let totalValue: number = 0;
            p.ItensPedido = await this.itenPedidoRepository.find({ where: { pedidoId: p.id } })
            for (const item of p.ItensPedido) { //p.ItensPedido.forEach(async (item) =>  
                let produto = await this.produtoRepository.findOne({ where: { id: item.produtoId } })
                totalValue += produto.value * item.quantity;
            }
            p.total_Value = totalValue;
            return p;
        }))
        return pedidosFull;
    }

    async createPedido(createPedidoInput: CreatePedidoInput): Promise<CreatePedidoInput> {
        let pedido = this.handlePedido(createPedidoInput);
        let pedidoToBeSaved = this.pedidoRepository.create(pedido);
        let pedidoSaved = await this.pedidoRepository.save(pedidoToBeSaved);
        let itensPedidoList = this.handleItensPedido(createPedidoInput.itemPedido, pedidoSaved)
        let newPedido = this.itenPedidoRepository.create(itensPedidoList);
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