import { Person } from "../../../core/infrastructure/models/person"
import { Subject } from "./subject"

export class Student {

    private studentId: number | undefined
    private person: Person | undefined
    private grade: number | undefined
    private subjects: Subject[] | undefined
    private status: number | undefined
    private dateRegister: string | undefined
    private dateUpdate: string | undefined


    public get getStudentId(): number | undefined {
        return this.studentId
    }

    public set setStudentId(value: number | undefined) {
        this.studentId = value
    }

    public get getPerson(): Person | undefined {
        return this.person
    }

    public set setPerson(value: Person | undefined) {
        this.person = value
    }

    public get getSubjects(): Subject[] | undefined {
        return this.subjects
    }

    public set setSubjects(value: Subject[] | undefined) {
        this.subjects = value
    }

    public get getGrade(): number | undefined {
        return this.grade
    }

    public set setGrade(value: number | undefined) {
        this.grade = value
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