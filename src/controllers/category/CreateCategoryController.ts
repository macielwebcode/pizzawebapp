import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController{
    async handle(req: Request, res: Response){

        const { name } = req.body;

        const createCatService = new CreateCategoryService()

        const category = await createCatService.execute({
            name
        })
        res.json(category)
        return
    }
}

export{ CreateCategoryController }