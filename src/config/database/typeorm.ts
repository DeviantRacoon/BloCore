import { DataSource } from "typeorm";

// Core
import { PersonEntity } from "../../app/core/domain/entities/person.entity";
import { UserEntity } from "../../app/core/domain/entities/user.entity";
import { RoleEntity } from "../../app/core/domain/entities/role.entity"; 

// Menu
import { MenuEntity } from "../../app/menu/domain/entities/menu.entity";
import { DisplayEntity } from "../../app/menu/domain/entities/display.entity"; 

export const AppDataSource = new DataSource({
    type: "mariadb",
    host: process.env.HOST_MYSQL,
    port: parseInt(process.env.PORT_MYSQL!),
    username: process.env.USER_MYSQL,
    password: process.env.PASSWORD_MYSQL,
    database: process.env.DATABASE_MYSQL,
    // synchronize: true,
    logging: true, 
    entities: [
        PersonEntity,
        UserEntity,
        RoleEntity,
        MenuEntity,
        DisplayEntity,
    ],
    subscribers: [],
    migrations: [],
})
