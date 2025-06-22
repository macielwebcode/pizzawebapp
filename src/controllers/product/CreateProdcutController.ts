
import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";


class CreateProductController{
    async handle(req: Request, res: Response){

        const{ name, price, description, category_id } = req.body

        if(!req.file){
            throw new Error("erro upload file");
            
        }else{

            const { originalname, filename: banner } = req.file

            const createProduct = new CreateProductService
    
            const product =  await createProduct.execute({
                name,
                price,
                description,
                banner,
                category_id
            })
            res.json(product)
            return
        }

        
    }
}

export { CreateProductController }