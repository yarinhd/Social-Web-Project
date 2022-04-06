export class UserError extends Error {
    status: number;

    constructor(message: string, status: number) {
        super();
        Error.captureStackTrace(this, this.constructor)
        this.name = this.constructor.name;
        this.message = message;
        this.status = status;
    }
}


export class CommentNotFoundError extends UserError {
    constructor(message: string) {
        super(message || 'Comment not found', 404)
    }
}