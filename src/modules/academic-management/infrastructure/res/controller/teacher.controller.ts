import { Request, Response } from "express";

import { TeacherUseCase } from "../../../application/usecase/teacher.usecase";
import { TeacherFactory } from "../../../application/factory/teacher.factory";
import { Teacher } from "../../models/teacher";

const teacherUseCase = new TeacherUseCase();

export const getTeachers = async (request: Request, response: Response) => {
    try {
        const data = await teacherUseCase.getTeachers();

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

export const getTeacherByPk = async (request: Request, response: Response) => {
    try {
        let id = Number(request.params.id)
        const data = await teacherUseCase.getTeacherByPk(id);

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

export const saveTeacher = async (request: Request, response: Response) => {
    try {
        let teacher = new Teacher();
        TeacherFactory.assignment(teacher, request.body);
        const data = await teacherUseCase.saveTeacher(teacher);

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

export const updateTeacher = async (request: Request, response: Response) => {
    try {
        let teacher = new Teacher();
        TeacherFactory.assignment(teacher, request.body);
        const data = await teacherUseCase.updateTeacher(teacher);

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

export const savesSubjectToTeacher = async (request: Request, response: Response) => {
    try {
        let teacher = new Teacher();
        TeacherFactory.assignment(teacher, request.body);
        const data = await teacherUseCase.savesSubjectToTeacher(teacher);

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
