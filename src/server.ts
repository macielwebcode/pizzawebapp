import express, { Request, Response, NextFunction } from "express";

import { router } from './routes'

import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error){
        res.status(400).json({
            error: err.message
        })
    }
    res.status(500).json({
        status: 'error',
        message: 'Internal server error'
    })
    return
})

app.listen(3333, () => console.log('servidor on'))