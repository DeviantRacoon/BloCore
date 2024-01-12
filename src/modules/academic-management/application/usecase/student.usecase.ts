import { StudentServices } from "../../domain/services/student.service"
import { StudentFactory } from "../factory/student.factory"
import { PersonUseCase } from "../../../core/application/usecase/person.usecase"
import { SubjectUseCase } from "./subject.usecase"
import { Student } from "../../infrastructure/models/student"



export class StudentUseCase {

    constructor(
        private studentServices = new StudentServices(),
        private subjectUseCase = new SubjectUseCase(),
        private personUseCase = new PersonUseCase()
    ) { }

    async getStudents() {
        const data = await this.studentServices.getStudents()
        return data
    }

    async getStudentByPk(studentID: number) {
        const data = await this.studentServices.getStudentByPk(studentID)
        return data
    }

    async saveStudent(student: Student) {
        let hasUndefinedFields = StudentFactory.checkUndefinedFields(student);

        if (hasUndefinedFields) {
            throw new Error('Los datos del estudiante no están completos');
        }

        const personData = await this.personUseCase.savePerson(student.getPerson!);
        student.setPerson = personData

        const data = await this.studentServices.saveStudent(student)
        return data
    }

    async updateStudent(student: Student) {
        if (!student.getStudentId) { 
            throw new Error('No ha sido enviado el ID del estudiante');
        }

        const personData = await this.personUseCase.updatePerson(student.getPerson!);   
        student.setPerson = personData     

        const data = await this.studentServices.saveStudent(student)
        return data
    }


    async savesSubjectToStudent(student: Student) {
        if (student.getSubjects?.length === 0 || !student.getSubjects) { 
            throw new Error('No ha sido enviadas las materias');
        }
        let subjectsIds = student.getSubjects.map(elem => elem.getSubjectId!)
        let subjects = await this.subjectUseCase.getSubjectByManyPk(subjectsIds)

        if (!student.getStudentId) { 
            throw new Error('No ha sido enviado el ID del maestro');
        }

        const data = await this.studentServices.savesSubjectToStudent(student, subjects)
        return data
    }

}