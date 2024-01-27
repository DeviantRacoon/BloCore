import { Person } from "../../infrastructure/models/person";

export abstract class PersonRepository {

    abstract getPersons(): Promise<Person[]>;
    abstract getPersonByPk(personId: number): Promise<Person>;
    abstract savePerson(person: Person): Promise<Person>;

}