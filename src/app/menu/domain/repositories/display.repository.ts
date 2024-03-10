import { Display } from "../../infrastructure/models/display";
import { PaginatedResult } from "../../../../utils/paginate";

export abstract class DisplayRepository {

    abstract getDisplays(): Promise<Display[]>;
    abstract getDisplaysByParams(page: number, display: Display): Promise<PaginatedResult<Display>>;
    abstract getDisplayByPk(displayId: number): Promise<Display>;
    abstract saveDisplay(display: Display): Promise<Display>;
    
}