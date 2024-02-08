import { Request, Response } from "express";

import userUseCase from "../../../application/usecases/user";
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
        const token = await userUseCase.login(user)

        response.setHeader('Authorization', `Bearer ${token}`)
        return response.json({
            ok: true,
            data: 'Login successful'
        })
    } catch (error: any) {
        return response.json({
            ok: false,
            error: "usuario/contraseña incorrectos"
        })
    }
};

