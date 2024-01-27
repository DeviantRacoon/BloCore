import { Person } from "./person";

export class User {

    private userId: number | undefined
    private email: string | undefined
    private password: string | undefined
    private role: number | undefined
    private person: Person | undefined
    private status: number | undefined
    private dateRegister: string | undefined
    private dateUpdate: string | undefined


    public get getUserId(): number | undefined {
        return this.userId
    }

    public set setUserId(value: number | undefined) {
        this.userId = value
    }

    public get getEmail(): string | undefined {
        return this.email
    }

    public set setEmail(value: string | undefined) {
        this.email = value
    }

    public get getPassword(): string | undefined {
        return this.password
    }

    public set setPassword(value: string | undefined) {
        this.password = value
    }

    public get getRole(): number | undefined {
        return this.role
    }

    public set setRole(value: number | undefined) {
        this.role = value
    }

    public get getPerson(): Person | undefined {
        return this.person
    }

    public set setPerson(value: Person | undefined) {
        this.person = value
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