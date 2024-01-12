import { PersonFactory } from "../../application/factory/person.factory"
import { PersonEntity } from "../entities/person.entity"
import { Person } from "../../infrastructure/models/person"

export class PersonServices {

    constructor(
        private personEntity = PersonEntity
    ) { }


    async getPersons() {
        const data = await this.personEntity.find()
        return data
    }

    async getPersonByPk(PersonID: number) {
        const data = await this.personEntity.findOneBy({ personId: PersonID })
        return data
    }

    async savePerson(person: Person): Promise<Person> {
        const factorySave = PersonFactory.toJson(person)
        const data = await this.personEntity.save(factorySave)
        return PersonFactory.jsonToModel(data)
    }

}