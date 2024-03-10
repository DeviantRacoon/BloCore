import { Role } from "../../infrastructure/models/role";

export class RoleFactory {

    static assignment(role: Role, fields: any) {

        if (fields.roleId) {
            role.setRoleId = fields.roleId;
        } else {
            role.setRoleId = undefined;
        }

        if (fields.roleName) {
            role.setRoleName = fields.roleName;
        } else {
            role.setRoleName = undefined;
        }

        if (fields.status) {
            role.setStatus = fields.status;
        } else {
            role.setStatus = undefined;
        }

        if (fields.dateRegister) {
            role.setDateRegister = fields.dateRegister;
        } else {
            role.setDateRegister = undefined;
        }

        if (fields.dateUpdate) {
            role.setDateUpdate = fields.dateUpdate;
        } else {
            role.setDateUpdate = undefined;
        }
    }

    static jsonToModel(fields: any) {
        let role = new Role()

        if (fields.roleId) {
            role.setRoleId = fields.roleId;
        } else {
            role.setRoleId = undefined;
        }

        if (fields.roleName) {
            role.setRoleName = fields.roleName;
        } else {
            role.setRoleName = undefined;
        }

        if (fields.status) {
            role.setStatus = fields.status;
        } else {
            role.setStatus = undefined;
        }

        if (fields.dateRegister) {
            role.setDateRegister = fields.dateRegister;
        } else {
            role.setDateRegister = undefined;
        }

        if (fields.dateUpdate) {
            role.setDateUpdate = fields.dateUpdate;
        } else {
            role.setDateUpdate = undefined;
        }

        return role;
    }

    static toJson(role: Role) {
        return {
            roleId: role.getRoleId,
            roleName: role.getRoleName,
            status: role.getStatus,
            dateRegister: role.getDateRegister,
            dateUpdate: role.getDateUpdate,
        };
    }

    static checkUndefinedFields(role: Role) {
        const fields = [
            role.getRoleName
        ];

        return fields.some(field => field === undefined);
    }

    static arrayToJsonArray(data: Role[]) {
        let roleJson: any[] = [];
        data?.map(role => {
            roleJson.push(this.toJson(role));
        });
        return roleJson;
    }

    static arrayJsonToModelArray(data: any) {
        let roles: Role[] = [];
        data?.map((role: any) => {
            roles.push(this.jsonToModel(role));
        });
        return roles;
    }


}