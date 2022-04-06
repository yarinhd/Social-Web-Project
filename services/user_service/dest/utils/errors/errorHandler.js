"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userErrorHandler = void 0;
const userError_1 = require("./userError");
function userErrorHandler(error, req, res, next) {
    if (error instanceof userError_1.UserError) {
        console.log(`\n Info: \n User Error \n ${error.name} was thrown with status: ${error.status} and message: ${error.message}`);
        res.status(error.status).send({
            type: error.name,
            message: error.message
        });
        next();
    }
    else {
        next(error);
    }
}
exports.userErrorHandler = userErrorHandler;
