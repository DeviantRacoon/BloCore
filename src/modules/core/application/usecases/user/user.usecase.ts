import personUseCase from "../person"
import Token from "../../../../../config/token"
import { UserRepository } from "../../../domain/repositories/user.repository" 
import { UserFactory } from "../../factories/user.factory" 
import { User } from "../../../infrastructure/models/user" 

export class UserUseCase {
    private userRepository: UserRepository

    constructor(userRepository: UserRepository) { 
        this.userRepository = userRepository
    }

    async getUsers() {
        const data = await this.userRepository.getUsers()
        return data
    }

    async getUserByPk(userID: number) {
        const data = await this.userRepository.getUserByPk(userID)
        return data
    }

    async createUser(user: User) {
        let hasUndefinedFields = UserFactory.checkUndefinedFields(user);

        if (hasUndefinedFields) { 
            throw new Error("Los datos del usuario no están completos")
        }

        let hash = await this.userRepository.hasPassword(user.getPassword!)
        user.setPassword = hash

        personUseCase.savePerson(user.getPerson!)

        const data = await this.userRepository.saveUser(user)
        return data
    }

    async updateUser(user: User) {
        if (!user.getUserId) { 
            throw new Error('No ha sido enviado el ID del usuario');
        }

        const data = await this.userRepository.saveUser(user)
        return data
    }
    
    async login(user: User) {
        if (!user.getUsername || !user.getPassword) { 
            throw new Error("Los datos del usuario no están completos")
        }

        const userByUsername = await this.userRepository.getUserByUsername(user.getUsername)
        const isLogin = this.userRepository.comparePassword(user.getPassword, userByUsername.getPassword!)

        if (!isLogin) { 
            throw new Error("usuario/contraseña incorrectos")
        }

        let token = Token.getJwtToken(user)
        user.setPassword = undefined

        const data = await this.userRepository.saveUser(user)
        return token
    }

}