import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/ListByCategoryService";


class ListByCategoryController{
    async handle(req: Request, res: Response){
        const category_id = req.query.category_id as string

        const listByCat = new ListByCategoryService()

        const products = await listByCat.execute({
            category_id
        })
        res.json(products)
        return
    }
}

export { ListByCategoryController }