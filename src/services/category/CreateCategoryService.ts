import { Category } from './../../generated/prisma/index.d';
import prismaCliente from "../../prisma";

interface CategoryRequest{
    name:string
}

class CreateCategoryService{
    async execute({name}: CategoryRequest){
        if(name=== ''){
            throw new Error("Name invalido");
            
        }
        const category = await prismaCliente.category.create({
            data:{
                name: name
            },
            select:{
                id: true,
                name: true
            }
        })
        return category
        
    }
}

export { CreateCategoryService }