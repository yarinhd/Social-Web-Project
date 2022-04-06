

import {NextFunction, Request, Response } from "express";

export function userAuth(req: Request, res: Response,next: NextFunction) {
    
    req.user = {
        _id: "6238a7dc11dc771c2b4357a0",
        firstName: "Jarin",
        lastName: "Hadad",
        email: "jarinhd1@gmail.com",
        password: "Yh12345",
        gender: "Male",
        avatar: "Photo Directory"
    }
    
    next()
}
