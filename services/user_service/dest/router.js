"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const express_1 = require("express");
const user_router_1 = require("./user/user.router");
exports.appRouter = (0, express_1.Router)();
exports.appRouter.use('/api/user', user_router_1.userRouter);
