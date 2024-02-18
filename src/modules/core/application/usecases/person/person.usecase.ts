import { PersonRepository } from "../../../domain/repositories/person.repository" 
import { PersonFactory } from "../../factories/person.factory"
import { Person } from "../../../infrastructure/models/person"

export class PersonUseCase {
    private personRepository: PersonRepository

    constructor(personRepository: PersonRepository) { 
        this.personRepository = personRepository
    }

    async getPersons() {
        const data = await this.personRepository.getPersons()
        return data
    }

    async getPersonByPk(personID: number) {
        const data = await this.personRepository.getPersonByPk(personID)
        return data
    }

    async savePerson(person: Person) {
        let hasUndefinedFields = PersonFactory.checkUndefinedFields(person);

        if (hasUndefinedFields) { 
            throw new Error("Los datos de la persona no están completos")
        }

        person.setStatus = Person.ENABLE
        const data = await this.personRepository.savePerson(person)
        return data
    }

    async updatePerson(person: Person) {
        if (!person.getPersonId) { 
            throw new Error('No ha sido enviado el ID de persona');
        }

        const data = await this.personRepository.savePerson(person)
        return data
    }

}