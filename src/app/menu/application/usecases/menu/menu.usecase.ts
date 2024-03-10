import { MenuRepository } from "../../../domain/repositories/menu.repository"
import { MenuFactory } from "../../factories/menu.factory"
import { Menu } from "../../../infrastructure/models/menu"

export class MenuUseCase {
    private menuRepository: MenuRepository

    constructor(menuRepository: MenuRepository) {
        this.menuRepository = menuRepository
    }

    async getMenus() {
        const data = await this.menuRepository.getMenus()
        return data
    }

    async getMenusByParams(page: number, menu: Menu) {
        const data = await this.menuRepository.getMenusByParams(page, menu)
        return data
    }

    async getMenuByPk(menuID: number) {
        const data = await this.menuRepository.getMenuByPk(menuID)
        return data
    }

    async createMenu(menu: Menu) {
        let hasUndefinedFields = MenuFactory.checkUndefinedFields(menu);

        if (hasUndefinedFields) {
            throw new Error("Los datos no están completos")
        }

        menu.setStatus = Menu.ENABLE
        const data = await this.menuRepository.saveMenu(menu)
        return data
    }

    async updateMenu(menu: Menu) {
        if (!menu.getMenuId) {
            throw new Error('No ha sido enviado el ID del usuario');
        }

        const data = await this.menuRepository.saveMenu(menu)
        return data
    }

}