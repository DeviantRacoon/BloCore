import { Student } from "./student"
import { Teacher } from "./teacher"

export class Subject {

    private subjectId: number | undefined
    private nameSubject: string | undefined
    private grade: number | undefined
    private students: Student[] | undefined
    private teachers: Teacher[] | undefined
    private status: number | undefined
    private dateRegister: string | undefined
    private dateUpdate: string | undefined


    public get getSubjectId(): number | undefined {
        return this.subjectId
    }

    public set setSubjectId(value: number | undefined) {
        this.subjectId = value
    }

    public get getNameSubject(): string | undefined {
        return this.nameSubject
    }

    public set setNameSubject(value: string | undefined) {
        this.nameSubject = value
    }

    public get getGrade(): number | undefined {
        return this.grade
    }

    public set setGrade(value: number | undefined) {
        this.grade = value
    }

    public get getStudents(): Student[] | undefined {
        return this.students
    }

    public set setStudents(value: Student[] | undefined) {
        this.students = value
    }

    public get getTeachers(): Teacher[] | undefined {
        return this.teachers
    }

    public set setTeachers(value: Teacher[] | undefined) {
        this.teachers = value
    }

    public get getStatus(): number | undefined {
        return this.status
    }

    public set setStatus(value: number | undefined) {
        this.status = value
    }

    public get getDateRegister(): string | undefined {
        return this.dateRegister
    }

    public set setDateRegister(value: string | undefined) {
        this.dateRegister = value
    }

    public get getDateUpdate(): string | undefined {
        return this.dateUpdate
    }

    public set setDateUpdate(value: string | undefined) {
        this.dateUpdate = value
    }

}