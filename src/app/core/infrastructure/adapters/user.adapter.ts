import { UserRepository } from "../../domain/repositories/user.repository"
import { UserFactory } from "../../application/factories/user.factory"
import { UserEntity } from "../../domain/entities/user.entity"
import { AppDataSource } from "../../../../config/database/typeorm"
import { PaginationService, PaginatedResult } from "../../../../utils/paginate"
import { User } from "../models/user"
import dotenv from "../../../../config/dotenv"
import bcrypt from 'bcrypt'
dotenv.config();

export class UserAdapter implements UserRepository {

    constructor(
        private paginationService = new PaginationService()
    ) { }

    async getUsers(): Promise<User[]> {
        let userRepository = await AppDataSource
            .getRepository(UserEntity)
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.person', 'person')
            .leftJoinAndSelect('user.role', 'role')
            .getMany()

        return UserFactory.arrayJsonToModelArray(userRepository)
    }

    async getUsersByParams(page: number, user: User): Promise<PaginatedResult<User>> {
        let userRepository = AppDataSource
            .getRepository(UserEntity)
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.person', 'person')
            .leftJoinAndSelect('user.role', 'role')

        if (user.getUsername) {
            userRepository.andWhere('user.username like :username', { username: `%${user.getUsername}%` })
        }

        if (user.getStatus) {
            userRepository.andWhere('user.status = :status', { status: user.getStatus })
        }

        if (user.getDateRegister) {
            userRepository.andWhere('user.dateRegister = :dateRegister', { dateRegister: user.getDateRegister })
        }

        if (user.getRole) {
            userRepository.andWhere('user.role = :role', { role: user.getRole.getRoleId })
        }

        const paginatedResult = await this.paginationService.paginate(userRepository, { page });

        const data = UserFactory.arrayJsonToModelArray(paginatedResult.data);
        return { ...paginatedResult, data };
    }

    async getUserByPk(userId: number): Promise<User> {
        let userRepository = await AppDataSource
            .getRepository(UserEntity)
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.person', 'person')
            .leftJoinAndSelect('user.role', 'role')
            .where('user.userId = :userId', { userId })
            .getOneOrFail()

        return UserFactory.jsonToModel(userRepository);
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
            .select(['user.userId', 'user.username', 'user.email', 'user.password'])
            .where('BINARY user.username = :username', { username })
            .andWhere('user.status = :status', { status: User.ENABLE })
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