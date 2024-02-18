import { PersonRepository } from "../../domain/repositories/person.repository"
import { PersonFactory } from "../../application/factories/person.factory"
import { PersonEntity } from "../../domain/entities/person.entity"
import { AppDataSource } from "../../../../config/database/typeorm"
import { Person } from "../models/person"

export class PersonAdapter implements PersonRepository {

    async getPersons(): Promise<Person[]> {
        let persons = await AppDataSource
            .getRepository(PersonEntity)
            .createQueryBuilder('person')
            .getMany()

        return PersonFactory.arrayJsonToModelArray(persons)
    }

    async getPersonByPk(personId: number): Promise<Person> {
        let personRepository = await AppDataSource
            .getRepository(PersonEntity)
            .createQueryBuilder('person')
            .where('person.personId = :personId', { personId })
            .getOne()

        return PersonFactory.jsonToModel(personRepository)
    }
    
    async savePerson(person: Person): Promise<Person> {
        let personJson = PersonFactory.toJson(person)

        let personRepository = await AppDataSource
            .createQueryBuilder()
            .insert()
            .into(PersonEntity)
            .values([personJson])
            .orUpdate(['firstName', 'secondName', 'lastName', 'secondLastName', 'age', 'status'])
            .execute()

        personJson.personId = personRepository.identifiers[0].personId
        return PersonFactory.jsonToModel(personJson)
    }

}