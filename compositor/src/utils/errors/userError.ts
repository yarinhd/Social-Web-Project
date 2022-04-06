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


export class UserUnauthorized extends UserError {
    constructor(message: string) {
        super(message || 'User not authorized!', 401)
    }
}
