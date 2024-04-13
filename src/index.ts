import express from 'express';
import cors from 'cors';
import AppDataSource from './data-source';
import userRouter from './routes/UserRoutes';
// import categoryRouter from './routes/CategoryRoutes';
// import subCategoryRouter from './routes/SubCategoryRoutes';
// import productRouter from './routes/ProductRoutes';
// import userRouter from './routes/UserRoutes';

AppDataSource.initialize().then(() => {
    const app = express();
    app.use(cors());
    app.use(express.json());

    // On teste la connexion à la BDD en faisant une requete GET cela qui affiche Hello World
    app.get("/", (req, res) => {
        res.send("Hello World!");
    });

    app.use("/api/users", userRouter);

    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
});