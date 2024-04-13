import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Category } from "./entities/Category";
import { SubCategory } from "./entities/SubCategory";
import { Product } from "./entities/Product";
import { User } from "./entities/User";
import { Adress } from "./entities/Adress";
import { Order } from "./entities/Order";
import { OrderProduct } from "./entities/Order-Product";


dotenv.config({path: ".env.local"});

const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Category, SubCategory, Product, User, Adress, Order, OrderProduct],
    synchronize: true,
});

export default AppDataSource;