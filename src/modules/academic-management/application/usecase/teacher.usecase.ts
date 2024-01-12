import { TeacherServices } from "../../domain/services/teacher.service"
import { TeacherFactory } from "../factory/teacher.factory"
import { Teacher } from "../../infrastructure/models/teacher"
import { PersonUseCase } from "../../../core/application/usecase/person.usecase"
import { SubjectUseCase } from "./subject.usecase"



export class TeacherUseCase {

    constructor(
        private teacherServices = new TeacherServices(),
        private subjectUseCase = new SubjectUseCase(),
        private personUseCase = new PersonUseCase(),
    ) { }

    async getTeachers() {
        const data = await this.teacherServices.getTeachers()
        return data
    }

    async getTeacherByPk(teacherID: number) {
        const data = await this.teacherServices.getTeacherByPk(teacherID)
        return data
    }

    async saveTeacher(teacher: Teacher) {
        let hasUndefinedFields = TeacherFactory.checkUndefinedFields(teacher);

        if (hasUndefinedFields) {
            throw new Error('Los datos del profesor no están completos');
        }

        const personData = await this.personUseCase.savePerson(teacher.getPerson!);
        teacher.setPerson = personData

        const data = await this.teacherServices.saveTeacher(teacher)
        return data
    }

    async updateTeacher(teacher: Teacher) {
        if (!teacher.getTeacherId) { 
            throw new Error('No ha sido enviado el ID del profesor');
        }

        const personData = await this.personUseCase.updatePerson(teacher.getPerson!);   
        teacher.setPerson = personData     

        const data = await this.teacherServices.saveTeacher(teacher)
        return data
    }

    async savesSubjectToTeacher(teacher: Teacher) {
        if (teacher.getSubjects?.length === 0 || !teacher.getSubjects) { 
            throw new Error('No ha sido enviadas las materias');
        }
        let subjectsIds = teacher.getSubjects.map(elem => elem.getSubjectId!)
        let subjects = await this.subjectUseCase.getSubjectByManyPk(subjectsIds)

        if (!teacher.getTeacherId) { 
            throw new Error('No ha sido enviado el ID del maestro');
        }

        const data = await this.teacherServices.savesSubjectToTeacher(teacher, subjects)
        return data
    }

}