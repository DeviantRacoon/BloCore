import { Status } from "./status";

export class Person {

    private personId: number | undefined;
    private firstName: string | undefined;
    private secondName: string | undefined;
    private lastName: string | undefined;
    private secondLastName: string | undefined;
    private age: number | undefined;
    private status: number | undefined
    private dateRegister: string | undefined
    private dateUpdate: string | undefined

    public get getPersonId(): number | undefined {
        return this.personId;
    }

    public set setPersonId(value: number | undefined) {
        this.personId = value;
    }

    public get getFirstName(): string | undefined {
        return this.firstName;
    }

    public set setFirstName(value: string | undefined) {
        this.firstName = value;
    }

    public get getSecondName(): string | undefined {
        return this.secondName;
    }

    public set setSecondName(value: string | undefined) {
        this.secondName = value;
    }

    public get getLastName(): string | undefined {
        return this.lastName;
    }

    public set setLastName(value: string | undefined) {
        this.lastName = value;
    }

    public get getSecondLastName(): string | undefined {
        return this.secondLastName;
    }

    public set setSecondLastName(value: string | undefined) {
        this.secondLastName = value;
    }

    public get getAge(): number | undefined {
        return this.age;
    }

    public set setAge(value: number | undefined) {
        this.age = value;
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
