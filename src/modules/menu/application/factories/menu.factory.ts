import { Menu } from "../../infrastructure/models/menu";
import { DisplayFactory } from "./display.factory";

export class MenuFactory {

    static assignment(menu: Menu, fields: any) {

        if (fields.menuId) {
            menu.setMenuId = fields.menuId;
        } else {
            menu.setMenuId = undefined;
        }

        if (fields.menuName) {
            menu.setMenuName = fields.menuName;
        } else {
            menu.setMenuName = undefined;
        }

        if (fields.menuIcon) {
            menu.setMenuIcon = fields.menuIcon;
        } else {
            menu.setMenuIcon = undefined;
        }

        if (fields.displays) {
            menu.setDisplays = DisplayFactory.arrayJsonToModelArray(fields.displays);
        } else {
            menu.setDisplays = undefined;
        }

        if (fields.status) {
            menu.setStatus = fields.status;
        } else {
            menu.setStatus = undefined;
        }

        if (fields.dateRegister) {
            menu.setDateRegister = fields.dateRegister;
        } else {
            menu.setDateRegister = undefined;
        }

        if (fields.dateUpdate) {
            menu.setDateUpdate = fields.dateUpdate;
        } else {
            menu.setDateUpdate = undefined;
        }
    }

    static jsonToModel(fields: any) {
        let menu = new Menu()

        if (fields.menuId) {
            menu.setMenuId = fields.menuId;
        } else {
            menu.setMenuId = undefined;
        }

        if (fields.menuName) {
            menu.setMenuName = fields.menuName;
        } else {
            menu.setMenuName = undefined;
        }

        if (fields.menuIcon) {
            menu.setMenuIcon = fields.menuIcon;
        } else {
            menu.setMenuIcon = undefined;
        }

        if (fields.displays) {
            menu.setDisplays = DisplayFactory.arrayJsonToModelArray(fields.displays);
        } else {
            menu.setDisplays = undefined;
        }

        if (fields.status) {
            menu.setStatus = fields.status;
        } else {
            menu.setStatus = undefined;
        }

        if (fields.dateRegister) {
            menu.setDateRegister = fields.dateRegister;
        } else {
            menu.setDateRegister = undefined;
        }

        if (fields.dateUpdate) {
            menu.setDateUpdate = fields.dateUpdate;
        } else {
            menu.setDateUpdate = undefined;
        }

        return menu;
    }

    static toJson(menu: Menu) {
        return {
            menuId: menu.getMenuId,
            menuName: menu.getMenuName,
            menuIcon: menu.getMenuIcon,
            displays: DisplayFactory.arrayToJsonArray(menu.getDisplays!),
            status: menu.getStatus,
            dateRegister: menu.getDateRegister,
            dateUpdate: menu.getDateUpdate,
        };
    }

    static checkUndefinedFields(menu: Menu) {
        const fields: any[] = [
            menu.getMenuName,
            menu.getMenuIcon,
        ];

        return fields.some(field => field === undefined);
    }

    static arrayToJsonArray(data: Menu[]) {
        let menuJson: any[] = [];
        data?.map(menu => {
            menuJson.push(this.toJson(menu));
        });
        return menuJson;
    }

    static arrayJsonToModelArray(data: any) {
        let menus: Menu[] = [];
        data?.map((menu: any) => {
            menus.push(this.jsonToModel(menu));
        });
        return menus;
    }


}