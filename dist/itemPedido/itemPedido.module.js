"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemPedidoModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const itemPedido_provider_1 = require("./itemPedido.provider");
const itemPedido_service_1 = require("./itemPedido.service");
const produto_module_1 = require("../produto/produto.module");
const pedido_module_1 = require("../pedido/pedido.module");
const itemPedido_controller_1 = require("./itemPedido.controller");
let ItemPedidoModule = class ItemPedidoModule {
};
exports.ItemPedidoModule = ItemPedidoModule;
exports.ItemPedidoModule = ItemPedidoModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, produto_module_1.ProdutoModule, pedido_module_1.PedidoModule],
        controllers: [itemPedido_controller_1.ItemPedidoController],
        providers: [...itemPedido_provider_1.itemPedidoProvider, itemPedido_service_1.ItemPedidoService],
    })
], ItemPedidoModule);
//# sourceMappingURL=itemPedido.module.js.map