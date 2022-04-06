"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const server_1 = require("./server");
(async () => {
    const connectionString = `${config_1.config.db.server}:${config_1.config.db.port}/${config_1.config.db.name}`;
    console.log(connectionString);
    await mongoose_1.default.connect(connectionString);
    console.log(`[MongoDB] connected to port: ${config_1.config.db.port} --> V`);
    const server = server_1.Server.bootStrap();
})();
