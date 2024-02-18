import { User } from "../../infrastructure/models/user";
import { PersonFactory } from "./person.factory";

export class UserFactory {

    static assignment(user: User, fields: any) {

        if (fields.userId) {
            user.setUserId = fields.userId;
        } else {
            user.setUserId = undefined;
        }

        if (fields.person) {
            user.setPerson = PersonFactory.jsonToModel(fields.person);
        } else {
            user.setPerson = undefined;
        }

        if (fields.username) {
            user.setUsername = fields.username;
        } else {
            user.setUsername = undefined;
        }

        if (fields.password) {
            user.setPassword = fields.password;
        } else {
            user.setPassword = undefined;
        }

        if (fields.role) {
            user.setRole = fields.role;
        } else {
            user.setRole = undefined;
        }

        if (fields.status) {
            user.setStatus = fields.status;
        } else {
            user.setStatus = undefined;
        }

        if (fields.dateRegister) {
            user.setDateRegister = fields.dateRegister;
        } else {
            user.setDateRegister = undefined;
        }

        if (fields.dateUpdate) {
            user.setDateUpdate = fields.dateUpdate;
        } else {
            user.setDateUpdate = undefined;
        }
    }

    static jsonToModel(fields: any) {
        let user = new User()

        if (fields.userId) {
            user.setUserId = fields.userId;
        } else {
            user.setUserId = undefined;
        }

        if (fields.person) {
            user.setPerson = PersonFactory.jsonToModel(fields.person);
        } else {
            user.setPerson = undefined;
        }

        if (fields.username) {
            user.setUsername = fields.username;
        } else {
            user.setUsername = undefined;
        }

        if (fields.password) {
            user.setPassword = fields.password;
        } else {
            user.setPassword = undefined;
        }

        if (fields.role) {
            user.setRole = fields.role;
        } else {
            user.setRole = undefined;
        }

        if (fields.status) {
            user.setStatus = fields.status;
        } else {
            user.setStatus = undefined;
        }

        if (fields.dateRegister) {
            user.setDateRegister = fields.dateRegister;
        } else {
            user.setDateRegister = undefined;
        }

        if (fields.dateUpdate) {
            user.setDateUpdate = fields.dateUpdate;
        } else {
            user.setDateUpdate = undefined;
        }

        return user;
    }

    static toJson(user: User) {
        return {
            userId: user.getUserId,
            username: user.getUsername,
            password: user.getPassword,
            role: user.getRole,
            person: PersonFactory.toJson(user.getPerson!),
            status: user.getStatus,
            dateRegister: user.getDateRegister,
            dateUpdate: user.getDateUpdate,
        };
    }

    static checkUndefinedFields(user: User) {
        const fields = [
            user.getPerson,
            user.getUsername,
            user.getPassword
        ];

        return fields.some(field => field === undefined);
    }

    static arrayToJsonArray(data: User[]) {
        let userJson: any[] = [];
        data?.map(user => {
            userJson.push(this.toJson(user));
        });
        return userJson;
    }

    static arrayJsonToModelArray(data: any) {
        let users: User[] = [];
        data?.map((user: any) => {
            users.push(this.jsonToModel(user));
        });
        return users;
    }


}