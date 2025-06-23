import { Request, Response } from "express";
import { RemoveOrderService } from "../../services/order/RemoveOrderService";

class OrderRemoveController{
    async handle(req: Request, res: Response){
        const order_id = req.query.order_id as string

        const removeOrde = new RemoveOrderService()

        const order = await removeOrde.execute({
            order_id
        })

        res.json(order)
        return
    }
}

export { OrderRemoveController }