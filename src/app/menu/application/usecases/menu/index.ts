import { MenuRepository } from "../../../domain/repositories/menu.repository"; 
import { MenuAdapter } from "../../../infrastructure/adapters/menu.adapter"; 
import { MenuUseCase } from "./menu.usecase"; 

const menuRepository = new MenuAdapter();
const menuUseCase = new MenuUseCase(menuRepository);
export default menuUseCase;