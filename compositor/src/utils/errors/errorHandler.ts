import { AxiosError } from "axios";
import express from "express";

export function axiosUserErrorHandler(
    error: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) {
    if (error as AxiosError) {
        const axiosError = error as AxiosError;
        console.log(
            `\n Info: \n Axios Error \n ${error.name} was thrown with status: ${axiosError.response!.status} and message: ${axiosError.response!.statusText}`);
        
            res.status(axiosError.response!.status).send();
        next();
    }

    else {
        next(error)
    }

}