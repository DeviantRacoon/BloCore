import { PersonRepository } from "../../../domain/repositories/person.repository"; 
import { PersonAdapter } from "../../../infrastructure/adapters/person.adapter"; 
import { PersonUseCase } from "./person.usecase"; 

const personRepository = new PersonAdapter();
const personUseCase = new PersonUseCase(personRepository);
export default personUseCase;