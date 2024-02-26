import { Display } from "../../infrastructure/models/display";

export abstract class DisplayRepository {

    abstract getDisplays(): Promise<Display[]>;
    abstract getDisplayByPk(displayId: number): Promise<Display>;
    abstract saveDisplay(display: Display): Promise<Display>;
    
}