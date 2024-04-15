import { Router } from "express";
import { CategoryController } from "../controllers/CategoryControllers";


const categoryRouter = Router();
const categoryController = new CategoryController();

categoryRouter.get("/", (req, res) => {
    console.log("CategoryRouter - GET");
    categoryController.getAll(req,res);
});

categoryRouter.get("/:id", (req, res) => {
    console.log("CategoryRouter - GetById");
    categoryController.getById(req, res);
});

export default categoryRouter; 