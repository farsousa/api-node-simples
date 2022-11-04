import { DataSource } from "typeorm";
import { User } from "./entities/user.entity";

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: './db.sqlite',
    synchronize: true,
    logging: true,
    entities: [User]
})