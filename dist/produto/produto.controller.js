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
exports.ProdutoController = void 0;
const common_1 = require("@nestjs/common");
const produto_service_1 = require("./produto.service");
const produto_entity_1 = require("./produto.entity");
let ProdutoController = class ProdutoController {
    constructor(produtoService) {
        this.produtoService = produtoService;
    }
    getAllProduto() {
        return this.produtoService.findAll();
    }
    saveProduto(produto) {
        return this.produtoService.createProduto(produto);
    }
    updateProduto(paramns, updateProdutoInput) {
        let id = parseInt(paramns.id);
        return this.produtoService.updateProduto(id, updateProdutoInput);
    }
    deleteProduto(id) {
        return this.produtoService.deleteProduto(id);
    }
};
exports.ProdutoController = ProdutoController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "getAllProduto", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [produto_entity_1.Produto]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "saveProduto", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "updateProduto", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "deleteProduto", null);
exports.ProdutoController = ProdutoController = __decorate([
    (0, common_1.Controller)("/produto"),
    __metadata("design:paramtypes", [produto_service_1.ProdutoService])
], ProdutoController);
//# sourceMappingURL=produto.controller.js.map