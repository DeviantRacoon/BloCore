import { Person } from "./person";
import { Role } from "./role"; 

export class User {

    static ENABLE = 1;
    static DISABLE = 2;
    static PENDING = 3;
    static LOCK = 4;
    static DELETE = 99;

    private userId: number | undefined
    private username: string | undefined
    private email: string | undefined
    private password: string | undefined
    private token: string | undefined
    private role: Role | undefined
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

    public get getUsername(): string | undefined {
        return this.username
    }

    public set setUsername(value: string | undefined) {
        this.username = value
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

    public get getToken(): string | undefined {
        return this.token
    }

    public set setToken(value: string | undefined) {
        this.token = value
    }

    public get getRole(): Role | undefined {
        return this.role
    }

    public set setRole(value: Role | undefined) {
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