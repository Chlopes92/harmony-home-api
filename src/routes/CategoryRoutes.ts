import { Router } from "express";
import { CategoryController } from "../controllers/CategoryControllers";


const categoryRouter = Router();
const categoryController = new CategoryController(); // Crée une instance du CategoryController.

// Route pour récupérer toutes les catégories
categoryRouter.get("/", (req, res) => {
    console.log("CategoryRouter - GET");
    categoryController.getAll(req,res);
});

// Route pour récupérer une catégorie par son ID.
categoryRouter.get("/:id", (req, res) => {
    console.log("CategoryRouter - GetById");
    categoryController.getById(req, res);
});

export default categoryRouter; 