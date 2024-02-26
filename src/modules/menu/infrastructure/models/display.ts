import { Menu } from "./menu"; 

export class Display {

    static ENABLE = 1;
    static DISABLE = 2;
    static PENDING = 3;
    static LOCK = 4;
    static DELETE = 99;

    private displayId: number | undefined
    private displayName: string | undefined
    private displayUrl: string | undefined
    private displayIcon: string | undefined
    private menu: Menu | undefined
    private status: number | undefined
    private dateRegister: string | undefined
    private dateUpdate: string | undefined


    public get getDisplayId(): number | undefined {
        return this.displayId
    }

    public set setDisplayId(value: number | undefined) {
        this.displayId = value
    }

    public get getDisplayName(): string | undefined {
        return this.displayName
    }

    public set setDisplayName(value: string | undefined) {
        this.displayName = value
    }

    public get getDisplayUrl(): string | undefined {
        return this.displayUrl
    }

    public set setDisplayUrl(value: string | undefined) {
        this.displayUrl = value
    }

    public get getDisplayIcon(): string | undefined {
        return this.displayIcon
    }

    public set setDisplayIcon(value: string | undefined) {
        this.displayIcon = value
    }

    public get getMenu(): Menu | undefined {
        return this.menu
    }

    public set setMenu(value: Menu | undefined) {
        this.menu = value
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