"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotFoundError = exports.UserError = void 0;
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
class UserNotFoundError extends UserError {
    constructor(message) {
        super(message || 'User not found', 404);
    }
}
exports.UserNotFoundError = UserNotFoundError;
