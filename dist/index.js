"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv-safe/config");
const mikro_orm_config_1 = require("./mikro-orm.config");
const Alert_1 = require("./entities/Alert");
const nanoid_1 = require("nanoid");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const orm = yield mikro_orm_config_1.connectMikro();
    try {
        if (orm) {
            yield orm.getMigrator().up();
            const alert = orm.em.create(Alert_1.Alert, {
                id: nanoid_1.nanoid().toString(),
                timeFrame: '3',
                trade: 'Buy',
                symbol: 'BTCUSDT',
            });
            yield orm.em.persistAndFlush(alert);
        }
        else
            throw new Error('Could not connect Mikro-orm :(');
    }
    catch (e) {
        console.log(e.message);
    }
});
main().catch((err) => {
    console.error(err);
});
//# sourceMappingURL=index.js.map