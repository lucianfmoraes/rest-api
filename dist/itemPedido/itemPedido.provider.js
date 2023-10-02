"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemPedidoProvider = void 0;
const itemPedido_entity_1 = require("./itemPedido.entity");
exports.itemPedidoProvider = [
    {
        provide: 'ITEM_PEDIDO_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(itemPedido_entity_1.ItemPedido),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=itemPedido.provider.js.map