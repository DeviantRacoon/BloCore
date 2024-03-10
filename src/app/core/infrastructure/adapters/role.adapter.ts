import { RoleRepository } from "../../domain/repositories/role.repository"
import { RoleFactory } from "../../application/factories/role.factory"
import { RoleEntity } from "../../domain/entities/role.entity"
import { AppDataSource } from "../../../../config/database/typeorm"
import { PaginationService, PaginatedResult } from "../../../../utils/paginate"
import { Role } from "../models/role"

export class RoleAdapter implements RoleRepository {

    constructor(
        private paginationService = new PaginationService()
    ) { }

    async getRoles(): Promise<Role[]> {
        let RoleRepository = await AppDataSource
            .getRepository(RoleEntity)
            .createQueryBuilder('role')
            .getMany()

        return RoleFactory.arrayJsonToModelArray(RoleRepository)
    }

    async getRolesByParams(page: number, role: Role): Promise<PaginatedResult<Role>> {
        let roleRepository = AppDataSource
            .getRepository(RoleEntity)
            .createQueryBuilder('role')

        if (role.getRoleName) {
            roleRepository.andWhere('role.roleName like :roleName', { roleName: `%${role.getRoleName}%` })
        }

        if (role.getStatus) {
            roleRepository.andWhere('role.status = :status', { status: role.getStatus })
        }

        if (role.getDateRegister) {
            roleRepository.andWhere('role.dateRegister = :roleRegister', { dateRegister: role.getDateRegister })
        }

        const paginatedResult = await this.paginationService.paginate(roleRepository, { page });
        const data = RoleFactory.arrayJsonToModelArray(paginatedResult.data);
        return { ...paginatedResult, data };
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
            .getRepository(RoleEntity)
            .save(roleJson)

        roleJson.roleId = roleRepository.roleId
        return RoleFactory.jsonToModel(roleJson)
    }

}