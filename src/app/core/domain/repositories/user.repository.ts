import { PaginatedResult } from "../../../../utils/paginate";
import { User } from "../../infrastructure/models/user";

export abstract class UserRepository {

    abstract getUsers(): Promise<User[]>;
    abstract getUsersByParams(page: number, user: User): Promise<PaginatedResult<User>>;
    abstract getUserByPk(userId: number): Promise<User>;
    abstract saveUser(user: User): Promise<User>;
    abstract getUserByUsername(username: string): Promise<User>;
    abstract hasPassword(password: string): Promise<string>;
    abstract comparePassword(password: string, hash: string): Promise<Boolean>;

}