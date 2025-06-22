import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

interface Payload{
    sub: string;
}

export function isAuthenticated(

    req: Request,
    res: Response,
    next: NextFunction

){
    //receber o token primeiro
    const authToken = req.headers.authorization;
    if(!authToken){
        res.status(401).end()
        return
    }
    const [, token] = authToken.split(" ")
    
    try {
        //validar token
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        )as Payload;

        //recuperar id do token e colocar dentro do request
        req.user_id = sub
        
        return next()
        

    } catch (error) {
        res.status(401).end()
        return
    }

}