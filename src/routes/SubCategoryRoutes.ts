import { Router } from "express";
import { SubCategoryController } from "../controllers/SubCategoryControllers";

const subCategoryRouter = Router ();
const subCategoryController = new SubCategoryController(); // Crée une instance du SubCategoryController.

// Route pour récupérer toutes les sous-catégories
subCategoryRouter.get("/", (req, res) => {
    console.log("SubCategoryRouter - GetAll");
    subCategoryController.getAll(req, res);
});

// Route pour récupérer une sous-catégorie par son ID.
subCategoryRouter.get("/:categoryId", (req, res) => {
    console.log("SubCategoryRouter - GetById");
    subCategoryController.getByCategoryId(req, res);
});

export default subCategoryRouter;