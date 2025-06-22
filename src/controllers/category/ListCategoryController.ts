import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";


class ListCategoryController{
    async handle(req: Request, res: Response){
        const listCategory = new ListCategoryService()

        const category = await listCategory.execute()

        res.json(category)
        return
    }
}

export { ListCategoryController }