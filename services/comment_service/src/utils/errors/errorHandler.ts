import express from "express";
import { UserError } from "./userErrorts";

export function userErrorHandler(
    error: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) {
    if (error instanceof UserError) {
        console.log(
            `\n Info: \n User Error \n ${error.name} was thrown with status: ${error.status} and message: ${error.message}`);
        res.status(error.status).send({
            type: error.name,
            message: error.message
        });
        next();
    }

    else {
        next(error)
    }

}