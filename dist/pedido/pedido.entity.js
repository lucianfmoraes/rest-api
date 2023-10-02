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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
const itemPedido_entity_1 = require("../itemPedido/itemPedido.entity");
const user_entity_1 = require("../user/user.entity");
const typeorm_1 = require("typeorm");
let Pedido = class Pedido {
};
exports.Pedido = Pedido;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Pedido.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "datetime",
        unique: false,
        nullable: false,
    }),
    __metadata("design:type", Date)
], Pedido.prototype, "dt_Insert", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "float",
        unique: false,
        nullable: true
    }),
    __metadata("design:type", Number)
], Pedido.prototype, "total_Value", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Pedido.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.pedidos),
    __metadata("design:type", user_entity_1.User)
], Pedido.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => itemPedido_entity_1.ItemPedido, itemPedido => itemPedido.pedido),
    __metadata("design:type", Array)
], Pedido.prototype, "ItensPedido", void 0);
exports.Pedido = Pedido = __decorate([
    (0, typeorm_1.Entity)()
], Pedido);
//# sourceMappingURL=pedido.entity.js.map