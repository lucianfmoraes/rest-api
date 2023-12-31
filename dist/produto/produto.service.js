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
exports.ProdutoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let ProdutoService = class ProdutoService {
    constructor(produtoRepository) {
        this.produtoRepository = produtoRepository;
    }
    async findAll() {
        return this.produtoRepository.find();
    }
    createProduto(createProdutoInput) {
        const newProduct = this.produtoRepository.create(createProdutoInput);
        return this.produtoRepository.save(newProduct);
    }
    async updateProduto(id, updateProdutoInput) {
        await this.produtoRepository.update(id, updateProdutoInput);
        return this.produtoRepository.findOneByOrFail({ id });
    }
    async deleteProduto(id) {
        const deleteProduto = await this.produtoRepository.delete(id);
        const produto = await this.produtoRepository.find();
        return produto;
    }
};
exports.ProdutoService = ProdutoService;
exports.ProdutoService = ProdutoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('PRODUTO_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ProdutoService);
//# sourceMappingURL=produto.service.js.map