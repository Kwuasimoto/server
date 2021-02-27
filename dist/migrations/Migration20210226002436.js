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
exports.Migration20210226002436 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20210226002436 extends migrations_1.Migration {
    up() {
        return __awaiter(this, void 0, void 0, function* () {
            this.addSql('create table "alerts" ("id" text not null, "symbol" text not null, "time_frame" text not null, "trade" text not null, "time" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "created_at" timestamptz(0) not null);');
            this.addSql('alter table "alerts" add constraint "alerts_pkey" primary key ("id");');
        });
    }
}
exports.Migration20210226002436 = Migration20210226002436;
//# sourceMappingURL=Migration20210226002436.js.map