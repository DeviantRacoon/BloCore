import { MenuRepository } from "../../domain/repositories/menu.repository"
import { MenuFactory } from "../../application/factories/menu.factory"
import { MenuEntity } from "../../domain/entities/menu.entity"
import { AppDataSource } from "../../../../config/database/typeorm"
import { Menu } from "../models/menu"
import { PaginationService, PaginatedResult } from "../../../../utils/paginate"

export class MenuAdapter implements MenuRepository {

    constructor(
        private paginationService = new PaginationService()
    ) { }

    async getMenus(): Promise<Menu[]> {
        let menuRepository = await AppDataSource
            .getRepository(MenuEntity)
            .createQueryBuilder('menu')
            // .leftJoinAndSelect('menu.displays', 'displays')
            .getMany()

        return MenuFactory.arrayJsonToModelArray(menuRepository)
    }

    async getMenusByParams(page: number, menu: Menu): Promise<PaginatedResult<Menu>> {
        let menuRepository = AppDataSource
            .getRepository(MenuEntity)
            .createQueryBuilder('menu')
            .leftJoinAndSelect('menu.displays', 'displays')

        if (menu.getMenuName) {
            menuRepository.andWhere('menu.menuName like :menuName', { menuName: `%${menu.getMenuName}%` })
        }

        if (menu.getStatus) {
            menuRepository.andWhere('menu.status = :status', { status: menu.getStatus })
        }

        if (menu.getDateRegister) { 
            menuRepository.andWhere('menu.dateRegister = :dateRegister', { dateRegister: menu.getDateRegister })
        }
        
        const paginatedResult = await this.paginationService.paginate(menuRepository, { page });
        const data = MenuFactory.arrayJsonToModelArray(paginatedResult.data);
        return { ...paginatedResult, data };
    }

    async getMenuByPk(menuId: number): Promise<Menu> {
        let menuRepository = await AppDataSource
            .getRepository(MenuEntity)
            .createQueryBuilder('menu')
            .where('menu.menuId = :menuId', { menuId })
            .leftJoinAndSelect('menu.displays', 'displays')
            .getOne()

        return MenuFactory.jsonToModel(menuRepository);
    }

    async saveMenu(menu: Menu): Promise<Menu> {
        let menuJson = MenuFactory.toJson(menu)
        let menuRepository = await AppDataSource
            .getRepository(MenuEntity)
            .save(menuJson)

        menuJson.menuId = menuRepository.menuId
        return MenuFactory.jsonToModel(menuJson)
    }

}