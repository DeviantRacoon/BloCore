
export class Role {

    static ENABLE = 1;
    static DISABLE = 2;
    static PENDING = 3;
    static LOCK = 4;
    static DELETE = 99;

    private roleId: number | undefined
    private roleName: string | undefined
    private status: number | undefined
    private dateRegister: string | undefined
    private dateUpdate: string | undefined


    public get getRoleId(): number | undefined {
        return this.roleId
    }

    public set setRoleId(value: number | undefined) {
        this.roleId = value
    }

    public get getRoleName(): string | undefined {
        return this.roleName
    }

    public set setRoleName(value: string | undefined) {
        this.roleName = value
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