import { Request, Response } from "express";

import displayUseCase from "../../../application/usecases/display";
import { DisplayFactory } from "../../../application/factories/display.factory"; 
import { Display } from "../../models/display"; 


export const getDisplays = async (request: Request, response: Response) => {
    try {
        const data = await displayUseCase.getDisplays();

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

export const getDisplaysByParams = async (request: Request, response: Response) => {
    try {
        let display = new Display();
        let page = +request.query.page!
        DisplayFactory.assignment(display, request.body);
        const data = await displayUseCase.getDisplaysByParams(page, display);

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

export const getDisplayByPk = async (request: Request, response: Response) => {
    try {
        let id = Number(request.params.id)
        const data = await displayUseCase.getDisplayByPk(id);

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

export const createDisplay = async (request: Request, response: Response) => {
    try {
        let display = new Display();
        DisplayFactory.assignment(display, request.body);
        const data = await displayUseCase.createDisplay(display);

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

export const updateDisplay = async (request: Request, response: Response) => {
    try {
        let display = new Display();
        DisplayFactory.assignment(display, request.body);
        const data = await displayUseCase.updateDisplay(display);

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
