import { Request, Response } from 'express'

import { DetailUserService } from '../../services/user/DetailUserService'

class DetailUserController{
    async handle(req: Request, res: Response){

        const user_id = req.user_id

        const detailServiceUser = new DetailUserService()

        const user =  await detailServiceUser.execute(user_id)

        res.json(user)
        return
    }
}

export { DetailUserController}