import { getMenus, getMenuByPk, createMenu, updateMenu } from "../controllers/menu.controller";
import { validateToken } from "../../../../../config/middleware/token.middleware"; 
import { Router } from "express";

const menuRouter = Router()

menuRouter.get('/', [validateToken, getMenus])
menuRouter.get('/:id', [validateToken, getMenuByPk])
menuRouter.post('/', [validateToken, createMenu])
menuRouter.put('/', [validateToken, updateMenu])

export default menuRouter;
