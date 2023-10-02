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
exports.ItemPedidoController = void 0;
const itemPedido_service_1 = require("./itemPedido.service");
const common_1 = require("@nestjs/common");
let ItemPedidoController = class ItemPedidoController {
    constructor(itemPedidoService) {
        this.itemPedidoService = itemPedidoService;
    }
    getAllItemPedido() {
        return this.itemPedidoService.findAll();
    }
    createItemPedido(createItemPedidoInput) {
        return this.itemPedidoService.createItemPedido(createItemPedidoInput);
    }
};
exports.ItemPedidoController = ItemPedidoController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ItemPedidoController.prototype, "getAllItemPedido", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ItemPedidoController.prototype, "createItemPedido", null);
exports.ItemPedidoController = ItemPedidoController = __decorate([
    (0, common_1.Controller)("/pedido/item"),
    __metadata("design:paramtypes", [itemPedido_service_1.ItemPedidoService])
], ItemPedidoController);
//# sourceMappingURL=itemPedido.controller.js.map