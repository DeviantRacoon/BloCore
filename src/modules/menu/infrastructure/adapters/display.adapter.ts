import { DisplayRepository } from "../../domain/repositories/display.repository"
import { DisplayFactory } from "../../application/factories/display.factory"
import { DisplayEntity } from "../../domain/entities/display.entity"
import { AppDataSource } from "../../../../config/database/typeorm"
import { Display } from "../models/display"

export class DisplayAdapter implements DisplayRepository {

    async getDisplays(): Promise<Display[]> {
        let DisplayRepository = await AppDataSource
            .getRepository(DisplayEntity)
            .createQueryBuilder('display')
            .getMany()

        return DisplayFactory.arrayJsonToModelArray(DisplayRepository)
    }

    async getDisplayByPk(displayId: number): Promise<Display> {
        let DisplayRepository = await AppDataSource
            .getRepository(DisplayEntity)
            .createQueryBuilder('display')
            .where('display.displayId = :displayId', { displayId })
            .leftJoinAndSelect('display.menu', 'menu')
            .getOne()

        return DisplayFactory.jsonToModel(DisplayRepository);
    }

    async saveDisplay(display: Display): Promise<Display> {
        let displayJson = DisplayFactory.toJson(display)
        let displayRepository = await AppDataSource
            .getRepository(DisplayEntity)
            .save(displayJson)

            displayJson.displayId = displayRepository.displayId
        return DisplayFactory.jsonToModel(displayJson)
    }

}