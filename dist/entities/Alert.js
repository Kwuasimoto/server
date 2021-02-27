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
exports.Alert = void 0;
const core_1 = require("@mikro-orm/core");
const options = {
    tableName: 'alerts',
};
let Alert = class Alert extends core_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.time = new Date();
        this.updatedAt = new Date();
        this.createdAt = new Date();
    }
};
__decorate([
    core_1.Property({ type: 'text' }),
    __metadata("design:type", String)
], Alert.prototype, "symbol", void 0);
__decorate([
    core_1.Property({ type: 'text' }),
    __metadata("design:type", String)
], Alert.prototype, "timeFrame", void 0);
__decorate([
    core_1.Property({ type: 'text' }),
    __metadata("design:type", String)
], Alert.prototype, "trade", void 0);
__decorate([
    core_1.Property({ type: 'date' }),
    __metadata("design:type", Object)
], Alert.prototype, "time", void 0);
__decorate([
    core_1.PrimaryKey({ type: 'text' }),
    __metadata("design:type", String)
], Alert.prototype, "id", void 0);
__decorate([
    core_1.Property({ onUpdate: () => new Date(), type: 'date' }),
    __metadata("design:type", Object)
], Alert.prototype, "updatedAt", void 0);
__decorate([
    core_1.Property({ type: 'date' }),
    __metadata("design:type", Object)
], Alert.prototype, "createdAt", void 0);
Alert = __decorate([
    core_1.Entity(options)
], Alert);
exports.Alert = Alert;
//# sourceMappingURL=Alert.js.map