import { DisplayRepository } from "../../domain/repositories/display.repository"
import { DisplayFactory } from "../../application/factories/display.factory"
import { DisplayEntity } from "../../domain/entities/display.entity"
import { AppDataSource } from "../../../../config/database/typeorm"
import { PaginatedResult, PaginationService } from "../../../../utils/paginate"
import { Display } from "../models/display"

export class DisplayAdapter implements DisplayRepository {

    constructor(
        private paginationService = new PaginationService()
    ) { }

    async getDisplays(): Promise<Display[]> {
        let DisplayRepository = await AppDataSource
            .getRepository(DisplayEntity)
            .createQueryBuilder('display')
            .getMany()

        return DisplayFactory.arrayJsonToModelArray(DisplayRepository)
    }

    async getDisplaysByParams(page: number, display: Display): Promise<PaginatedResult<Display>> {
        let displayRepository = AppDataSource
            .getRepository(DisplayEntity)
            .createQueryBuilder('display')
            .leftJoinAndSelect('display.menu', 'displays')

        if (display.getDisplayName) {
            displayRepository.andWhere('display.displayName like :displayName', { displayName: `%${display.getDisplayName}%` })
        }

        if (display.getMenu?.getMenuId) {
            displayRepository.andWhere('display.menu = :menu', { menu: display.getMenu?.getMenuId })
        }

        if (display.getStatus) {
            displayRepository.andWhere('display.status = :status', { status: display.getStatus })
        }

        if (display.getDateRegister) {
            displayRepository.andWhere('display.dateRegister = :displayRegister', { dateRegister: display.getDateRegister })
        }

        const paginatedResult = await this.paginationService.paginate(displayRepository, { page });
        const data = DisplayFactory.arrayJsonToModelArray(paginatedResult.data);
        return { ...paginatedResult, data };
    }

    async getDisplayByPk(displayId: number): Promise<Display> {
        let DisplayRepository = await AppDataSource
            .getRepository(DisplayEntity)
            .createQueryBuilder('display')
            .where('display.displayId = :displayId', { displayId })
            .leftJoinAndSelect('display.menu', 'displays')
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