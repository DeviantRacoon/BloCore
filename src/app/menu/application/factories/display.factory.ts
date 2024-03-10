import { Display } from "../../infrastructure/models/display";
import { MenuFactory } from "./menu.factory";

export class DisplayFactory {

    static assignment(display: Display, fields: any) {

        if (fields.displayId) {
            display.setDisplayId = fields.displayId;
        } else {
            display.setDisplayId = undefined;
        }

        if (fields.menu) {
            display.setMenu = MenuFactory.jsonToModel(fields.menu);
        } else {
            display.setMenu = undefined;
        }

        if (fields.displayName) {
            display.setDisplayName = fields.displayName;
        } else {
            display.setDisplayName = undefined;
        }

        if (fields.displayUrl) {
            display.setDisplayUrl = fields.displayUrl;
        } else {
            display.setDisplayUrl = undefined;
        }

        if (fields.displayIcon) {
            display.setDisplayIcon = fields.displayIcon;
        } else {
            display.setDisplayIcon = undefined;
        }

        if (fields.status) {
            display.setStatus = fields.status;
        } else {
            display.setStatus = undefined;
        }

        if (fields.dateRegister) {
            display.setDateRegister = fields.dateRegister;
        } else {
            display.setDateRegister = undefined;
        }

        if (fields.dateUpdate) {
            display.setDateUpdate = fields.dateUpdate;
        } else {
            display.setDateUpdate = undefined;
        }
    }

    static jsonToModel(fields: any) {
        let display = new Display()

        if (fields.displayId) {
            display.setDisplayId = fields.displayId;
        } else {
            display.setDisplayId = undefined;
        }

        if (fields.menu) {
            display.setMenu = MenuFactory.jsonToModel(fields.menu);
        } else {
            display.setMenu = undefined;
        }

        if (fields.displayName) {
            display.setDisplayName = fields.displayName;
        } else {
            display.setDisplayName = undefined;
        }

        if (fields.displayUrl) {
            display.setDisplayUrl = fields.displayUrl;
        } else {
            display.setDisplayUrl = undefined;
        }

        if (fields.displayIcon) {
            display.setDisplayIcon = fields.displayIcon;
        } else {
            display.setDisplayIcon = undefined;
        }

        if (fields.status) {
            display.setStatus = fields.status;
        } else {
            display.setStatus = undefined;
        }

        if (fields.dateRegister) {
            display.setDateRegister = fields.dateRegister;
        } else {
            display.setDateRegister = undefined;
        }

        if (fields.dateUpdate) {
            display.setDateUpdate = fields.dateUpdate;
        } else {
            display.setDateUpdate = undefined;
        }

        return display;
    }

    static toJson(display: Display) {
        return {
            displayId: display.getDisplayId,
            menu: display.getMenu ? MenuFactory.toJson(display.getMenu!) : undefined,
            displayName: display.getDisplayName,
            displayUrl: display.getDisplayUrl,
            displayIcon: display.getDisplayIcon,
            status: display.getStatus,
            dateRegister: display.getDateRegister,
            dateUpdate: display.getDateUpdate,
        };
    }

    static checkUndefinedFields(display: Display) {
        const fields: any[] = [
            display.getDisplayName,
            display.getDisplayUrl,
            display.getDisplayIcon
        ];

        return fields.some(field => field === undefined);
    }

    static arrayToJsonArray(data: Display[]) {
        let displayJson: any[] = [];
        data?.map(display => {
            displayJson.push(this.toJson(display));
        });
        return displayJson;
    }

    static arrayJsonToModelArray(data: any) {
        let displays: Display[] = [];
        data?.map((display: any) => {
            displays.push(this.jsonToModel(display));
        });
        return displays;
    }


}