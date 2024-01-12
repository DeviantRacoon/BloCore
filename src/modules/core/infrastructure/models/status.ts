export class Status { 

    private statusId: number | undefined
    private nameStatus: string | undefined

    
    public get getStatusId(): number | undefined {
        return this.statusId;
    }

    public set setStatusId(value: number | undefined) {
        this.statusId = value;
    }

    public get getNameStatus(): string | undefined {
        return this.nameStatus;
    }

    public set setNameStatus(value: string | undefined) {
        this.nameStatus = value;
    }


}