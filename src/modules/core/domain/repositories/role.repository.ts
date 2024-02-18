import { Role } from "../../infrastructure/models/role";

export abstract class RoleRepository {

    abstract getRoles(): Promise<Role[]>;
    abstract getRoleByPk(roleId: number): Promise<Role>;
    abstract saveRole(role: Role): Promise<Role>;
    
}