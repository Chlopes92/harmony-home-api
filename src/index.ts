import express from 'express'; // Importe le module Express pour créer et gérer le serveur HTTP.
import cors from 'cors';
import AppDataSource from './data-source';
import userRouter from './routes/UserRoutes';
import categoryRouter from './routes/CategoryRoutes';
import subCategoryRouter from './routes/SubCategoryRoutes';
import productRouter from './routes/ProductRoutes';

// Initialise la connexion à la base de données.
AppDataSource.initialize().then(() => {
    const app = express();
    app.use(cors());
    app.use(express.json()); // Permet de traiter les données JSON dans les requêtes

    // Route de base pour vérifier que le serveur fonctionne
    app.get("/", (req, res) => {
        res.send("Hello World!");
    });

    // Utilisation des routeurs pour organiser les routes
    app.use("/api/users", userRouter);
    app.use("/api/category", categoryRouter);
    app.use("/api/sub-category", subCategoryRouter);
    app.use("/api/product", productRouter);

    // Démarrage du serveur sur le port défini dans les variables d'environnement
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
});