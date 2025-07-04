import { Request, Router, Response } from 'express';
import multer from 'multer';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/product/CreateProdcutController';
import uploadConfig from './config/multer'
import { ListByCategoryService } from './services/ListByCategoryService';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { OrderRemoveController } from './controllers/order/OrderRemoveController';
import { AddItemController } from './controllers/order/AddItemController';
import { RemoveItemController } from './controllers/order/RemoveItemController';
import { SendOrderController } from './controllers/order/SendOrderController';
import { ListOrderController } from './controllers/order/ListOrderController';
import { DetailOrderController } from './controllers/order/DetailOrderController';
import { EndOrderController } from './controllers/order/EndOrderController';

const router = Router()
const upload = multer(uploadConfig.upload("./tmp"))

//rotas user
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)


//rotas category
router.post('/category',isAuthenticated, new CreateCategoryController().handle)
router.get('/category', isAuthenticated, new ListCategoryController().handle)


//rotas product
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)


//rotas order
router.post('/order', isAuthenticated, new CreateOrderController().handle)
router.delete('/order', isAuthenticated, new OrderRemoveController().handle)
router.post('/order/add', isAuthenticated, new AddItemController().handle)
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle)
router.put('/order/send', isAuthenticated, new SendOrderController().handle)
router.get('/orders', isAuthenticated, new ListOrderController().handle)
router.get('/orders/detail', isAuthenticated, new DetailOrderController().handle)
router.put('/order/end', isAuthenticated, new EndOrderController().handle)


export { router }