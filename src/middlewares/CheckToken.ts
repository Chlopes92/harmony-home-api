import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";


const checkToken  = (req: Request, res: Response, next: NextFunction) => {
    const  token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized"  });
    }

    const tokenVerify =  token.replace("Bearer ", "");
    try {
        jwt.verify(tokenVerify, process.env.JWT_SECRET);
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" })
    }

    next();
}
export default checkToken;