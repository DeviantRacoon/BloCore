import { getUsers, getUserByPk, getUsersByParams, createUser, updateUser, login } from "../controllers/user.controller";
import { validateToken } from "../../../../../config/middleware/token.middleware";
import { Router } from "express";

const userRouter = Router()

userRouter.get('/', [validateToken, getUsers])
userRouter.get('/params', [validateToken, getUsersByParams])
userRouter.get('/:id', [validateToken, getUserByPk])
userRouter.post('/', [validateToken, createUser])
userRouter.put('/', [validateToken, updateUser])
userRouter.post('/login', login)

export default userRouter;
