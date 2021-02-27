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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMikro = exports.buildConf = void 0;
const core_1 = require("@mikro-orm/core");
const path_1 = __importDefault(require("path"));
const constants_1 = require("./constants");
const defaultOptions = Object.assign({}, constants_1.mikroConfig);
const buildConf = (mode, dOpts = defaultOptions) => {
    if (mode === undefined)
        return dOpts;
    switch (mode) {
        case 'production':
            return Object.assign(Object.assign({}, dOpts), { port: 5433, debug: true, retryConnect: false });
        case 'cproduction':
            return Object.assign(Object.assign({}, dOpts), { host: 'db', debug: true, retryConnect: true, migrations: Object.assign(Object.assign({}, dOpts.migrations), { path: path_1.default.join(__dirname, './migrations'), pattern: /^[\w-]+\d+\.js$/, emit: 'ts' }) });
        default:
            return dOpts;
    }
};
exports.buildConf = buildConf;
const connectMikro = (conf = exports.buildConf(constants_1.__prod__)) => __awaiter(void 0, void 0, void 0, function* () {
    let mikro = null;
    if (conf.retryConnect)
        while (conf.retryCount) {
            mikro = yield core_1.MikroORM.init(conf);
            if (yield mikro.isConnected())
                break;
            console.log(`Couldnt make Mikro-Orm connection, attempts left ${conf.retryCount}`);
            yield new Promise((resolve) => setTimeout(resolve, 3000));
            if (conf.retryCount)
                conf.retryCount--;
        }
    else
        mikro = yield core_1.MikroORM.init(conf);
    return mikro;
});
exports.connectMikro = connectMikro;
//# sourceMappingURL=mikro-orm.config.js.map