import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Category } from "./entities/Category";
import { SubCategory } from "./entities/SubCategory";
import { Product } from "./entities/Product";
import { User } from "./entities/User";
import { Adress } from "./entities/Adress";
import { Order } from "./entities/Order";
import { OrderProduct } from "./entities/Order-Product";


dotenv.config({path: ".env.local"}); // Charge les configurations depuis le fichier .env.local

// Configuration de la source de données pour la connexion à une base de données PostgreSQL.
const AppDataSource = new DataSource({
    type: "postgres", // Type de la base de données.
    host: process.env.DB_HOST, // Adresse du serveur de la base de données.
    port: Number(process.env.DB_PORT), // Port du serveur de la base de données.
    username: process.env.DB_USERNAME, // Nom d'utilisateur pour la connexion.
    password: process.env.DB_PASSWORD, // Mot de passe pour la connexion.
    database: process.env.DB_NAME, // Nom de la base de données.
    entities: [Category, SubCategory, Product, User, Adress, Order, OrderProduct], // Modèles d'entités à utiliser.
    synchronize: false, // Désactive la synchronisation automatique avec bdd.
});

export default AppDataSource;