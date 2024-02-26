import { DisplayRepository } from "../../../domain/repositories/display.repository" 
import { DisplayFactory } from "../../factories/display.factory" 
import { Display } from "../../../infrastructure/models/display" 

export class DisplayUseCase {
    private displayRepository: DisplayRepository

    constructor(displayRepository: DisplayRepository) { 
        this.displayRepository = displayRepository
    }

    async getDisplays() {
        const data = await this.displayRepository.getDisplays()
        return data
    }

    async getDisplayByPk(displayID: number) {
        const data = await this.displayRepository.getDisplayByPk(displayID)
        return data
    }

    async createDisplay(display: Display) {
        let hasUndefinedFields = DisplayFactory.checkUndefinedFields(display);

        if (hasUndefinedFields) { 
            throw new Error("Los datos no están completos")
        }

        display.setStatus = Display.ENABLE
        const data = await this.displayRepository.saveDisplay(display)
        return data
    }

    async updateDisplay(display: Display) {
        if (!display.getDisplayId) { 
            throw new Error('No ha sido enviado el ID del usuario');
        }

        const data = await this.displayRepository.saveDisplay(display)
        return data
    }

}