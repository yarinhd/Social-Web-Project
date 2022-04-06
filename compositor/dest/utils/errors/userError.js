"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUnauthorized = exports.UserError = void 0;
class UserError extends Error {
    constructor(message, status) {
        super();
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.message = message;
        this.status = status;
    }
}
exports.UserError = UserError;
class UserUnauthorized extends UserError {
    constructor(message) {
        super(message || 'User not authorized!', 401);
    }
}
exports.UserUnauthorized = UserUnauthorized;
