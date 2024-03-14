import { Request, Response } from "express";

import userUseCase from "../../../application/usecases/user/user.index";
import { UserFactory } from "../../../application/factories/user.factory"; 
import { User } from "../../models/user"; 


export const getUsers = async (request: Request, response: Response) => {
    try {
        const data = await userUseCase.getUsers();

        return response.json({
            ok: true,
            data,
        });
    } catch (error: any) {
        return response.json({
            ok: false,
            error: error.message,
        });
    }
};

export const getUsersByParams = async (request: Request, response: Response) => {
    try {
        let user = new User();
        let page = +request.query.page!
        UserFactory.assignment(user, request.query);
        const data = await userUseCase.getUsersByParams(page, user);
        
        return response.json({
            ok: true,
            data: data.data,
            page: data.page,
            limit: data.limit,
            totalCount: data.totalCount

        });
    } catch (error: any) {
        return response.json({
            ok: false,
            error: error.message,
        });
    }
};

export const getUserByPk = async (request: Request, response: Response) => {
    try {
        let id = Number(request.params.id)
        const data = await userUseCase.getUserByPk(id);

        return response.json({
            ok: true,
            data,
        });

    } catch (error: any) {
        return response.json({
            ok: false,
            error: error.message,
        });
    }
};

export const createUser = async (request: Request, response: Response) => {
    try {
        let user = new User();
        UserFactory.assignment(user, request.body);
        const data = await userUseCase.createUser(user);

        return response.json({
            ok: true,
            data,
        });

    } catch (error: any) {
        return response.json({
            ok: false,
            error: error.message,
        });
    }
};

export const updateUser = async (request: Request, response: Response) => {
    try {
        let user = new User();
        UserFactory.assignment(user, request.body);
        const data = await userUseCase.updateUser(user);

        return response.json({
            ok: true,
            data,
        });

    } catch (error: any) {
        return response.json({
            ok: false,
            error: error.message,
        });
    }
};

export const login = async (request: Request, response: Response) => {
    
    try {
        let user = new User();
        UserFactory.assignment(user, request.body);
        const currentUser = await userUseCase.login(user)

        response.setHeader('Authorization', currentUser.getToken!)
        return response.json({
            ok: true,
            data: currentUser
        })
    } catch (error: any) {
        return response.json({
            ok: false,
            error: "usuario/contraseña incorrectos",
            message: error.message
        })
    }
};

