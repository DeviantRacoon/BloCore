import { Request, Response } from "express";

import roleUseCase from "../../../application/usecases/role";
import { RoleFactory } from "../../../application/factories/role.factory"; 
import { Role } from "../../models/role"; 


export const getRoles = async (request: Request, response: Response) => {
    try {
        const data = await roleUseCase.getRoles();

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

export const getRolesByParams = async (request: Request, response: Response) => {
    try {
        let role = new Role();
        let page = +request.query.page!
        RoleFactory.assignment(role, request.query);
        const data = await roleUseCase.getRolesByParams(page, role);
        
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

export const getRoleByPk = async (request: Request, response: Response) => {
    try {
        let id = Number(request.params.id)
        const data = await roleUseCase.getRoleByPk(id);

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

export const createRole = async (request: Request, response: Response) => {
    try {
        let role = new Role();
        RoleFactory.assignment(role, request.body);
        const data = await roleUseCase.createRole(role);

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

export const updateRole = async (request: Request, response: Response) => {
    try {
        let role = new Role();
        RoleFactory.assignment(role, request.body);
        console.log(role);
        const data = await roleUseCase.updateRole(role);

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
