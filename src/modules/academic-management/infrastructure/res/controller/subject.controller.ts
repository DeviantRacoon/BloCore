import { Request, Response } from "express";

import { SubjectUseCase } from "../../../application/usecase/subject.usecase";
import { SubjectFactory } from "../../../application/factory/subject.factory";
import { Subject } from "../../models/subject";

const subjectUseCase = new SubjectUseCase();

export const getSubjects = async (request: Request, response: Response) => {
    try {
        const data = await subjectUseCase.getSubjects();

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

export const getSubjectByPk = async (request: Request, response: Response) => {
    try {
        let id = Number(request.params.id)
        const data = await subjectUseCase.getSubjectByPk(id);

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

export const saveSubject = async (request: Request, response: Response) => {
    try {
        let subject = new Subject();
        SubjectFactory.assignment(subject, request.body);
        const data = await subjectUseCase.saveSubject(subject);

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

export const updateSubject = async (request: Request, response: Response) => {
    try {
        let subject = new Subject();
        SubjectFactory.assignment(subject, request.body);
        const data = await subjectUseCase.updateSubject(subject);

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
