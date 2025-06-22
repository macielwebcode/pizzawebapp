import { Request, Router, Response } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';

const router = Router()

router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)

router.get('/teste', (req: Request, res: Response) => {
    res.status(200).json({ok: true})
    return
    // throw new Error('erro ao fazer essa req')
})

export { router }