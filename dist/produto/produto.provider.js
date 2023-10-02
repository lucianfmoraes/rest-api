"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.produtoProvider = void 0;
const produto_entity_1 = require("./produto.entity");
exports.produtoProvider = [
    {
        provide: 'PRODUTO_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(produto_entity_1.Produto),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=produto.provider.js.map