import { RoleRepository } from "../../../domain/repositories/role.repository"; 
import { RoleAdapter } from "../../../infrastructure/adapters/role.adapter"; 
import { RoleUseCase } from "./role.usecase"; 

const roleRepository = new RoleAdapter();
const roleUseCase = new RoleUseCase(roleRepository);
export default roleUseCase;