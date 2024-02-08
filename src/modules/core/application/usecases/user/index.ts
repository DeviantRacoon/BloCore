import { UserRepository } from "../../../domain/repositories/user.repository"; 
import { UserAdapter } from "../../../infrastructure/adapters/user.adapter"; 
import { UserUseCase } from "./user.usecase"; 

const userRepository = new UserAdapter();
const userUseCase = new UserUseCase(userRepository);
export default userUseCase;