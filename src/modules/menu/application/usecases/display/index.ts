import { DisplayRepository } from "../../../domain/repositories/display.repository"; 
import { DisplayAdapter } from "../../../infrastructure/adapters/display.adapter"; 
import { DisplayUseCase } from "./display.usecase"; 

const displayRepository = new DisplayAdapter();
const displayUseCase = new DisplayUseCase(displayRepository);
export default displayUseCase;