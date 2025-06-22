import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";

class AuthUserController{
    async handle(req: Request, res: Response) {
        const { email, pass } = req.body

        const authUserService = new AuthUserService();

        const auth =  await authUserService.execute({
            email,
            pass
        })

        res.json(auth)
        return
    }
}

export  {AuthUserController}