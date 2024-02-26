import { MenuRepository } from "../../domain/repositories/menu.repository"
import { MenuFactory } from "../../application/factories/menu.factory"
import { MenuEntity } from "../../domain/entities/menu.entity"
import { AppDataSource } from "../../../../config/database/typeorm"
import { Menu } from "../models/menu"

export class MenuAdapter implements MenuRepository {

    async getMenus(): Promise<Menu[]> {
        let MenuRepository = await AppDataSource
            .getRepository(MenuEntity)
            .createQueryBuilder('menu')
            .leftJoinAndSelect('menu.displays', 'displays')
            .getMany()

        return MenuFactory.arrayJsonToModelArray(MenuRepository)
    }

    async getMenuByPk(menuId: number): Promise<Menu> {
        let MenuRepository = await AppDataSource
            .getRepository(MenuEntity)
            .createQueryBuilder('menu')
            .where('menu.menuId = :menuId', { menuId })
            .leftJoinAndSelect('menu.displays', 'displays')
            .getOne()

        return MenuFactory.jsonToModel(MenuRepository);
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