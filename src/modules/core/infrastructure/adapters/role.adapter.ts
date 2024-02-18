import { RoleRepository } from "../../domain/repositories/role.repository"
import { RoleFactory } from "../../application/factories/role.factory"
import { RoleEntity } from "../../domain/entities/role.entity"
import { AppDataSource } from "../../../../config/database/typeorm"
import { Role } from "../models/role"

export class RoleAdapter implements RoleRepository {

    async getRoles(): Promise<Role[]> {
        let RoleRepository = await AppDataSource
            .getRepository(RoleEntity)
            .createQueryBuilder('role')
            .getMany()

        return RoleFactory.arrayJsonToModelArray(RoleRepository)
    }

    async getRoleByPk(roleId: number): Promise<Role> {
        let RoleRepository = await AppDataSource
            .getRepository(RoleEntity)
            .createQueryBuilder('role')  
            .where('role.roleId = :roleId', { roleId })
            .getOne()

        return RoleFactory.jsonToModel(RoleRepository);
    }

    async saveRole(role: Role): Promise<Role> {
        let roleJson = RoleFactory.toJson(role)

        let roleRepository = await AppDataSource
            .createQueryBuilder()
            .insert()
            .into(RoleEntity)
            .values([roleJson])
            .orUpdate(['roleName', 'status'])
            .execute()

        roleJson.roleId = roleRepository.identifiers[0].roleId
        return RoleFactory.jsonToModel(roleJson)
    }

}