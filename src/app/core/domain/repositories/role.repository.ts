import { Role } from "../../infrastructure/models/role";
import { PaginatedResult } from "../../../../utils/paginate";

export abstract class RoleRepository {

    abstract getRoles(): Promise<Role[]>;
    abstract getRolesActive(): Promise<Role[]> 
    abstract getRolesByParams(page: number, role: Role): Promise<PaginatedResult<Role>>;
    abstract getRoleByPk(roleId: number): Promise<Role>;
    abstract saveRole(role: Role): Promise<Role>;
    
}