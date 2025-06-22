import { Request, Router, Response } from 'express';

const router = Router()

router.get('/teste', (req: Request, res: Response) => {
    res.status(200).json({ok: true})
    return
    // kthrow new Error('erro ao fazer essa req')
})

export { router }