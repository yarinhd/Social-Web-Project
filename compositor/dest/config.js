"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    serverPort: +(process.env.PORT || 3004),
    endpoints: {
        user: {
            port: +(process.env.USER_PORT || 3001),
            hostname: process.env.USER_HOST || 'http://localhost',
            api: process.env.USER_API || '/api/user',
        },
        post: {
            port: +(process.env.POST_PORT || 3002),
            hostname: process.env.POST_HOST || 'http://localhost',
            api: process.env.POST_API || '/api/post',
        },
        comment: {
            port: +(process.env.COMMENT_PORT || 3003),
            hostname: process.env.COMMENT_HOST || 'http://localhost',
            api: process.env.COMMENT_API || '/api/comment',
        }
    }
};
