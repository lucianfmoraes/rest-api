"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const pedido_entity_1 = require("./pedido.entity");
let PedidoService = class PedidoService {
    constructor(pedidoRepository, itenPedidoRepository, produtoRepository) {
        this.pedidoRepository = pedidoRepository;
        this.itenPedidoRepository = itenPedidoRepository;
        this.produtoRepository = produtoRepository;
    }
    async findAll() {
        const teste = await this.pedidoRepository.find({ relations: { ItensPedido: true } });
        return teste;
    }
    async createPedido(createPedidoInput) {
        const newPedido = await this.pedidoRepository.create(createPedidoInput);
        let lastPedidoId = (await this.pedidoRepository.insert(newPedido)).generatedMaps[0].id;
        for await (const item of createPedidoInput.itemPedido) {
            item.pedidoId = lastPedidoId;
            await this.itenPedidoRepository.save(item);
        }
        let itens = await this.itenPedidoRepository.find({ where: { pedidoId: parseInt(lastPedidoId) } });
        var total = 0;
        for await (const item of itens) {
            let produto = await this.produtoRepository.find({ where: { id: item.produtoId } });
            total = total + (produto[0].value * item.quantity);
        }
        const updatePedido = await this.pedidoRepository.createQueryBuilder()
            .update(pedido_entity_1.Pedido)
            .set({
            total_Value: total
        })
            .where("id = :id", { id: lastPedidoId })
            .execute();
        const pedidoConcluido = this.pedidoRepository.find({ relations: { ItensPedido: true }, where: { id: lastPedidoId } });
        return pedidoConcluido;
    }
};
exports.PedidoService = PedidoService;
exports.PedidoService = PedidoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('PEDIDO_REPOSITORY')),
    __param(1, (0, common_1.Inject)('ITEM_PEDIDO_REPOSITORY')),
    __param(2, (0, common_1.Inject)('PRODUTO_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], PedidoService);
//# sourceMappingURL=pedido.service.js.map