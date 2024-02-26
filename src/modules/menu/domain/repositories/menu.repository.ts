import { Menu } from "../../infrastructure/models/menu";

export abstract class MenuRepository {

    abstract getMenus(): Promise<Menu[]>;
    abstract getMenuByPk(menuId: number): Promise<Menu>;
    abstract saveMenu(menu: Menu): Promise<Menu>;
    
}