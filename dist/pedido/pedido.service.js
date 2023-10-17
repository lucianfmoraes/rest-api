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
let PedidoService = class PedidoService {
    constructor(pedidoRepository, itenPedidoRepository) {
        this.pedidoRepository = pedidoRepository;
        this.itenPedidoRepository = itenPedidoRepository;
    }
    async findAll() {
        return this.pedidoRepository.find();
    }
    async createPedido(createPedidoInput) {
        let pedido = this.handlePedido(createPedidoInput);
        let pedidoToBeSaved = this.pedidoRepository.create(pedido);
        let pedidoSaved = await this.pedidoRepository.save(pedidoToBeSaved);
        let itensPedidoList = this.handleItensPedido(createPedidoInput.itemPedido, pedidoSaved);
        let newPedido = this.itenPedidoRepository.create(itensPedidoList);
        this.itenPedidoRepository.save(newPedido);
        return createPedidoInput;
    }
    handlePedido(pedidoInput) {
        let pedido = {
            dt_insert: pedidoInput.dt_insert,
            user_id: pedidoInput.user_id,
            total_value: pedidoInput.total_value,
            itemPedido: pedidoInput.itemPedido
        };
        return pedido;
    }
    handleItensPedido(itensPedido, pedido) {
        return itensPedido.map((itemPedido, index) => {
            itemPedido.pedidoId = pedido.id;
            return itemPedido;
        });
    }
};
exports.PedidoService = PedidoService;
exports.PedidoService = PedidoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('PEDIDO_REPOSITORY')),
    __param(1, (0, common_1.Inject)('ITEM_PEDIDO_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], PedidoService);
//# sourceMappingURL=pedido.service.js.map