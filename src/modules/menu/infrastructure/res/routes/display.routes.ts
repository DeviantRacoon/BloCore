import { getDisplays, getDisplayByPk, createDisplay, updateDisplay } from "../controllers/display.controller";
import { validateToken } from "../../../../../config/middleware/token.middleware"; 
import { Router } from "express";

const displayRouter = Router()

displayRouter.get('/', [validateToken, getDisplays])
displayRouter.get('/:id', [validateToken, getDisplayByPk])
displayRouter.post('/', [validateToken, createDisplay])
displayRouter.put('/', [validateToken, updateDisplay])

export default displayRouter;
