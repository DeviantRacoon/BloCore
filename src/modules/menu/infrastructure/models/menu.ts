import { DisplayFactory } from "../../application/factories/display.factory"; 
import { Display } from "./display"; 

export class Menu {

    static ENABLE = 1;
    static DISABLE = 2;
    static PENDING = 3;
    static LOCK = 4;
    static DELETE = 99;

    private menuId: number | undefined
    private menuName: string | undefined
    private menuIcon: string | undefined
    private displays: Display[] | undefined
    private status: number | undefined
    private dateRegister: string | undefined
    private dateUpdate: string | undefined


    public get getMenuId(): number | undefined {
        return this.menuId
    }

    public set setMenuId(value: number | undefined) {
        this.menuId = value
    }

    public get getMenuName(): string | undefined {
        return this.menuName
    }

    public set setMenuName(value: string | undefined) {
        this.menuName = value
    }

    public get getMenuIcon(): string | undefined {
        return this.menuIcon
    }

    public get getDisplays(): Display[] | undefined {
        return this.displays
    }
    
    public set setDisplays(value: Display[] | undefined) {
        this.displays = value
    }

    public set setMenuIcon(value: string | undefined) {
        this.menuIcon = value
    }

    public get getStatus(): number | undefined {
        return this.status
    }

    public set setStatus(value: number | undefined) {
        this.status = value
    }

    public get getDateRegister(): string | undefined {
        return this.dateRegister
    }

    public set setDateRegister(value: string | undefined) {
        this.dateRegister = value
    }

    public get getDateUpdate(): string | undefined {
        return this.dateUpdate
    }

    public set setDateUpdate(value: string | undefined) {
        this.dateUpdate = value
    }

}