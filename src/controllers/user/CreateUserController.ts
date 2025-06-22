import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController{
    async handle(req: Request, res: Response){
        const { name, email, pass } = req.body
        const createUserService = new CreateUserService()
        const user = await createUserService.execute({
            name,
            email,
            pass
        })
        res.json({user})
        return
    }
}

export { CreateUserController }