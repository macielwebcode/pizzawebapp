
import prismaCliente from "../prisma";
interface ProductRequest{
    category_id: string
}

class ListByCategoryService{
    async execute({ category_id }: ProductRequest){
        const findByCatId = await prismaCliente.product.findMany({
            where:{
                category_id: category_id
            }
        })

        return findByCatId
    }
}

export { ListByCategoryService }