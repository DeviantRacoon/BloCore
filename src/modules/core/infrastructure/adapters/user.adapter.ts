import { UserRepository } from "../../domain/repositories/user.repository"
import { UserFactory } from "../../application/factories/user.factory"
import { UserEntity } from "../../domain/entities/user.entity"
import { AppDataSource } from "../../../../config/database/typeorm"
import { User } from "../models/user"
import dotenv from "../../../../config/dotenv"
import bcrypt from 'bcrypt'
dotenv.config();

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
            .getRepository(UserEntity)
            .save(userJson)

        userJson.userId = userRepository.userId
        return UserFactory.jsonToModel(userJson)
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
        const saltRounds = Number(process.env.SALT_ROUNDS)
        const salt = await bcrypt.genSalt(saltRounds);
        return await bcrypt.hash(password, salt)
    }

    async comparePassword(password: string, hash: string) {
        let salt = process.env.SALT_ROUNDS
        return await bcrypt.compare(password, hash)
    }

}