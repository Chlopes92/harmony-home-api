import { Request, Response } from "express";
import { CategoryService } from "../services/CategoryServices";

export class CategoryController {
    // Instanciation du CategoryService en l'assigniant à la propriété categoryService de la classe CategoryController.
    // Cette instance est accessible uniquement dans cette classe.
    private categoryService = new CategoryService();

    // Récupère et affiche tous les catégories.
    async getAll(req: Request, res: Response) {
        console.log("CategoryController - GetAll");
        const categories = await this.categoryService.getAll();
        res.status(200).json({status: "OK", data: categories});
      
    }

    // Récupère une catégorie par son ID.
    async getById(req: Request, res: Response) {
        console.log("CategoryController - GetByID");
        const category = await this.categoryService.getById(Number(req.params.id));
        if(category) {
            res.status(200).json({status: "OK", data: category});
        } else {
            res.status(401).json({ message: "This category doesn't exist!" });
        }
    }
}