import { DataSource } from "typeorm";

// Core
import { PersonEntity } from "../../modules/core/domain/entities/person.entity";

// Academic Management
import { StudentEntity } from "../../modules/academic-management/domain/entities/student.entity";
import { TeacherEntity } from "../../modules/academic-management/domain/entities/teacher.entity";
import { SubjectEntity } from "../../modules/academic-management/domain/entities/subject.entity";

export const AppDataSource = new DataSource({
    type: "mariadb",
    host: process.env.HOST_MYSQL,
    port: parseInt(process.env.PORT_MYSQL!),
    username: process.env.USER_MYSQL,
    password: process.env.PASSWORD_MYSQL,
    database: process.env.DATABASE_MYSQL,
    // synchronize: true,
    // logging: true,
    entities: [
        PersonEntity,
        StudentEntity,
        TeacherEntity,
        SubjectEntity,
    ],
    subscribers: [],
    migrations: [],
})
