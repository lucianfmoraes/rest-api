"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedidoProvider = void 0;
const pedido_entity_1 = require("./pedido.entity");
const itemPedido_provider_1 = require("../itemPedido/itemPedido.provider");
exports.pedidoProvider = [
    {
        provide: 'PEDIDO_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(pedido_entity_1.Pedido),
        inject: ['DATA_SOURCE'],
    },
    itemPedido_provider_1.itemPedidoProvider[0]
];
//# sourceMappingURL=pedido.provider.js.map