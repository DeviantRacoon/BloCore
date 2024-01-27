import { PersonAdapter } from "../../infrastructure/adapters/person.adapter"
import { PersonFactory } from "../factories/person.factory"
import { Person } from "../../infrastructure/models/person"

export class PersonUseCase {

    constructor(
        private personServices = new PersonAdapter(),
    ) { }

    async getPersons() {
        const data = await this.personServices.getPersons()
        return data
    }

    async getPersonByPk(personID: number) {
        const data = await this.personServices.getPersonByPk(personID)
        return data
    }

    async savePerson(person: Person) {
        let hasUndefinedFields = PersonFactory.checkUndefinedFields(person);

        if (hasUndefinedFields) { 
            throw new Error("Los datos de la persona no están completos")
        }

        const data = await this.personServices.savePerson(person)
        return data
    }

    async updatePerson(person: Person) {
        if (!person.getPersonId) { 
            throw new Error('No ha sido enviado el ID de persona');
        }

        const data = await this.personServices.savePerson(person)
        return data
    }

}