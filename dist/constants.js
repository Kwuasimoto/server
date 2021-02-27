"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mikroConfig = exports.__prod__ = void 0;
const path_1 = __importDefault(require("path"));
const Alert_1 = require("./entities/Alert");
exports.__prod__ = process.env.PRODUCTION;
const migrations = {
    tableName: process.env.MIGRATION_TABLE_NAME || 'migrations',
    path: path_1.default.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
    transactional: process.env.TRANSACTIONAL !== 'false',
    allOrNothing: process.env.ALL_OR_NOTHING !== 'false',
};
const mikroConfig = {
    entities: [Alert_1.Alert],
    migrations: migrations,
    dbName: process.env.DB_NAME || 'postgres',
    port: parseInt(process.env.DB_PORT || '5432'),
    user: process.env.USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    password: process.env.DB_PASSWORD || 'secret',
    type: process.env.DB_TYPE === undefined ? 'mysql' : 'postgresql',
    debug: process.env.DB_DEBUG !== 'false',
    retryConnect: process.env.DB_RETRY !== 'false',
    retryCount: 5,
};
exports.mikroConfig = mikroConfig;
//# sourceMappingURL=constants.js.map