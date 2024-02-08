import { UserRepository } from "../../domain/repositories/user.repository"
import { UserFactory } from "../../application/factories/user.factory"
import { UserEntity } from "../../domain/entities/user.entity"
import { AppDataSource } from "../../../../config/database/typeorm"
import { User } from "../models/user"
import bcrypt from 'bcrypt'

export class UserAdapter implements UserRepository {

    async getUsers(): Promise<User[]> {
        let UserRepository = await AppDataSource
            .getRepository(UserEntity)
            .createQueryBuilder('user')
            .getMany()

        return UserFactory.arrayJsonToModelArray(UserRepository)
    }

    async getUserByPk(userId: number): Promise<User> {
        let UserRepository = await AppDataSource
            .getRepository(UserEntity)
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.person', 'person')
            .where('user.userId = :userId', { userId })
            .getOne()

        return UserFactory.jsonToModel(UserRepository);
    }

    async saveUser(user: User): Promise<User> {
        let userJson = UserFactory.toJson(user)

        let userRepository = await AppDataSource
            .createQueryBuilder()
            .insert()
            .into(UserEntity)
            .values([userJson])
            .orUpdate(['firstName', 'secondName', 'lastName', 'secondLastName', 'age', 'status'])
            .execute()

        return UserFactory.jsonToModel(userRepository)
    }

    async getUserByUsername(username: string) {
        const user = await AppDataSource
            .getRepository(UserEntity)
            .createQueryBuilder('user')
            .select(['user.username', 'user.password'])
            .where('BINARY user.username = :username', { username })
            .getOneOrFail()

        return UserFactory.jsonToModel(user)
    }

    async hasPassword(password: string) {
        return await bcrypt.hash(password, 10)
    }

    async comparePassword(password: string, hash: string) {
        return await bcrypt.compare(password, hash)
    }

}