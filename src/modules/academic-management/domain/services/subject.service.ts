import { SubjectFactory } from "../../application/factory/subject.factory"
import { SubjectEntity } from "../entities/subject.entity"
import { Subject } from "../../infrastructure/models/subject"
import { In } from "typeorm"

export class SubjectServices {

    constructor(
        private subjectEntity = SubjectEntity
    ) { }


    async getSubjects() {
        const data = await this.subjectEntity.find({})
        return data
    }

    async getSubjectByPk(subjectId: number) {
        const data = await this.subjectEntity.findOneBy({ subjectId: subjectId })
        return data
    }

    async getSubjectByManyPk(subjectsIds: number[]): Promise<Subject[]> {
        const data = await this.subjectEntity.find({
            where: { subjectId: In(subjectsIds) }
        })

        return SubjectFactory.arrayJsonToModelArray(data)
    }

    async saveSubject(subject: Subject) {
        const factorySave = SubjectFactory.toJson(subject);
        const data = await this.subjectEntity.save(factorySave);
        return data;
    }

}