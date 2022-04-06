"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAuth = void 0;
function userAuth(req, res, next) {
    req.user = {
        _id: "623f954e90340caed5150448",
        firstName: "Jarin",
        lastName: "Hadad",
        email: "jarinhd1@gmail.com",
        password: "Yh12345",
        gender: "Male",
        avatar: "Photo Directory"
    };
    next();
}
exports.userAuth = userAuth;
