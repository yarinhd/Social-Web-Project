"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.axiosUserErrorHandler = void 0;
function axiosUserErrorHandler(error, req, res, next) {
    if (error) {
        const axiosError = error;
        console.log(`\n Info: \n Axios Error \n ${error.name} was thrown with status: ${axiosError.response.status} and message: ${axiosError.response.statusText}`);
        res.status(axiosError.response.status).send();
        next();
    }
    else {
        next(error);
    }
}
exports.axiosUserErrorHandler = axiosUserErrorHandler;
