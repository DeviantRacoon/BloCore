import { Request, Response } from "express";

import { StudentUseCase } from "../../../application/usecase/student.usecase";
import { StudentFactory } from "../../../application/factory/student.factory";
import { Student } from "../../models/student";

const studentUseCase = new StudentUseCase();

export const getStudents = async (request: Request, response: Response) => {
    try {
        const data = await studentUseCase.getStudents();

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

export const getStudentByPk = async (request: Request, response: Response) => {
    try {
        let id = Number(request.params.id)
        const data = await studentUseCase.getStudentByPk(id);

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

export const saveStudent = async (request: Request, response: Response) => {
    try {
        let student = new Student();
        StudentFactory.assignment(student, request.body);
        const data = await studentUseCase.saveStudent(student);

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

export const updateStudent = async (request: Request, response: Response) => {
    try {
        let student = new Student();
        StudentFactory.assignment(student, request.body);
        const data = await studentUseCase.updateStudent(student);

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
        let student = new Student();
        StudentFactory.assignment(student, request.body);
        const data = await studentUseCase.savesSubjectToStudent(student);

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

