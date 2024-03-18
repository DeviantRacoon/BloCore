import { RoleRepository } from "../../../domain/repositories/role.repository" 
import { RoleFactory } from "../../factories/role.factory" 
import { Role } from "../../../infrastructure/models/role" 

export class RoleUseCase {
    private roleRepository: RoleRepository

    constructor(roleRepository: RoleRepository) { 
        this.roleRepository = roleRepository
    }

    async getRoles() {
        const data = await this.roleRepository.getRoles()
        return data
    }

    async getRolesActive() {
        const data = await this.roleRepository.getRolesActive()
        return data
    }

    async getRolesByParams(page: number, role: Role) {
        const data = await this.roleRepository.getRolesByParams(page, role)
        return data
    }

    async getRoleByPk(roleID: number) {
        const data = await this.roleRepository.getRoleByPk(roleID)
        return data
    }

    async createRole(role: Role) {
        let hasUndefinedFields = RoleFactory.checkUndefinedFields(role);

        if (hasUndefinedFields) { 
            throw new Error("Los datos del rol no están completos")
        }

        role.setStatus = Role.ENABLE 
        const data = await this.roleRepository.saveRole(role)
        return data
    }

    async updateRole(role: Role) {
        if (!role.getRoleId) { 
            throw new Error('No ha sido enviado el ID del rol');
        }

        const data = await this.roleRepository.saveRole(role)
        return data
    }

}