import { Request, Response } from "express";

import menuUseCase from "../../../application/usecases/menu";
import { MenuFactory } from "../../../application/factories/menu.factory"; 
import { Menu } from "../../models/menu"; 


export const getMenus = async (request: Request, response: Response) => {
    try {
        const data = await menuUseCase.getMenus();

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

export const getMenuByPk = async (request: Request, response: Response) => {
    try {
        let id = Number(request.params.id)
        const data = await menuUseCase.getMenuByPk(id);

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

export const createMenu = async (request: Request, response: Response) => {
    try {
        let menu = new Menu();
        MenuFactory.assignment(menu, request.body);
        const data = await menuUseCase.createMenu(menu);

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

export const updateMenu = async (request: Request, response: Response) => {
    try {
        let menu = new Menu();
        MenuFactory.assignment(menu, request.body);
        const data = await menuUseCase.updateMenu(menu);

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
