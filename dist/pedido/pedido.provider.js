"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedidoProvider = void 0;
const pedido_entity_1 = require("./pedido.entity");
exports.pedidoProvider = [
    {
        provide: 'PEDIDO_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(pedido_entity_1.Pedido),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=pedido.provider.js.map