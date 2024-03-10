import { Menu } from "../../infrastructure/models/menu";
import { PaginatedResult } from "../../../../utils/paginate";

export abstract class MenuRepository {

    abstract getMenus(): Promise<Menu[]>;
    abstract getMenusByParams(page: number, menu: Menu): Promise<PaginatedResult<Menu>>;
    abstract getMenuByPk(menuId: number): Promise<Menu>;
    abstract saveMenu(menu: Menu): Promise<Menu>;

}