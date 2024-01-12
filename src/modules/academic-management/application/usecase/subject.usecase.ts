import { SubjectServices } from "../../domain/services/subject.service"
import { SubjectFactory } from "../factory/subject.factory"
import { Subject } from "../../infrastructure/models/subject"



export class SubjectUseCase {

    constructor(
        private subjectServices = new SubjectServices(),
    ) { }

    async getSubjects() {
        const data = await this.subjectServices.getSubjects()
        return data
    }

    async getSubjectByPk(SubjectID: number) {
        const data = await this.subjectServices.getSubjectByPk(SubjectID)
        return data
    }

    async getSubjectByManyPk(subjectsIds: number[]) {
        const data = await this.subjectServices.getSubjectByManyPk(subjectsIds)
        return data
    }

    async saveSubject(Subject: Subject) {
        let hasUndefinedFields = SubjectFactory.checkUndefinedFields(Subject);

        if (hasUndefinedFields) {
            throw new Error('Los datos de la materia no están completos');
        }

        const data = await this.subjectServices.saveSubject(Subject)
        return data
    }

    async updateSubject(Subject: Subject) {
        if (!Subject.getSubjectId) { 
            throw new Error('No ha sido enviado el ID de la materia');
        }

        const data = await this.subjectServices.saveSubject(Subject)
        return data
    }

}