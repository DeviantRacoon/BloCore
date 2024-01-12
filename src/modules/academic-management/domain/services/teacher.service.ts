import { TeacherFactory } from "../../application/factory/teacher.factory"
import { TeacherEntity } from "../entities/teacher.entity"
import { SubjectEntity } from "../entities/subject.entity"
import { Teacher } from "../../infrastructure/models/teacher"
import { Subject } from "typeorm/persistence/Subject"
import { In } from "typeorm"

export class TeacherServices {

    constructor(
        private teacherEntity = TeacherEntity,
        private subjectEntity = SubjectEntity
    ) { }


    async getTeachers() {
        const data = await this.teacherEntity.find({
            relations: {
                person: true
            }
        })
        return data
    }

    async getTeacherByPk(teacherID: number) {
        const data = await this.teacherEntity.findOne({
            where: { teacherId: teacherID },
            relations: {
                person: true,
                subjects: true
            }
        })
        return TeacherFactory.jsonToModel(data)
    }

    async saveTeacher(teacher: Teacher) {
        const factorySave = TeacherFactory.toJson(teacher);
        const data = await this.teacherEntity.save(factorySave);
        return data;
    }

    async savesSubjectToTeacher(teacher: Teacher, subjectsIds: any[]) {
        const factorySave = TeacherFactory.toJson(teacher);
        const data = await this.teacherEntity.save(factorySave);
        return data;
    }

}