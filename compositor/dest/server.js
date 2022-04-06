"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const router_1 = require("./router");
const errorHandler_1 = require("./utils/errors/errorHandler");
class Server {
    constructor() {
        console.log(`In Server constructor --> V`);
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
        this.app.use(router_1.appRouter);
        this.app.use(errorHandler_1.axiosUserErrorHandler);
        this.app.listen(config_1.config.serverPort, () => {
            console.log(`Server started on port: ${config_1.config.serverPort} --> V `);
        });
    }
    ;
    static bootStrap() {
        return new Server;
    }
}
exports.Server = Server;
