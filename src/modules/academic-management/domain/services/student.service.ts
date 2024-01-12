import { StudentFactory } from "../../application/factory/student.factory";
import { StudentEntity } from "../entities/student.entity";
import { Student } from "../../infrastructure/models/student";

export class StudentServices {
    constructor(private studentEntity = StudentEntity) { }

    async getStudents() {
        const data = await this.studentEntity.find({
            relations: {
                person: true,
            },
        });
        return data;
    }

    async getStudentByPk(studentID: number) {
        const data = await this.studentEntity.findOne({
            where: { studentId: studentID },
            relations: {
                subjects: true,
                person: true,
            },
        });
        return data;
    }

    async saveStudent(student: Student) {
        const factorySave = StudentFactory.toJson(student);
        const data = await this.studentEntity.save(factorySave);
        return data;
    }

    async savesSubjectToStudent(student: Student, subjectsIds: any[]) {
        const factorySave = StudentFactory.toJson(student);
        const data = await this.studentEntity.save(factorySave);
        return data;
    }
}
