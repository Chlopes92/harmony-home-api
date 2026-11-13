import { Request, Response } from "express";
import { SubCategoryService } from "../services/SubCategoryServices";


export class SubCategoryController {
    // Instanciation du SubCategoryService en l'assigniant à la propriété subCategoryService de la classe SubCategoryController.
    // Cette instance est accessible uniquement dans cette classe.
    private subCategoryService = new SubCategoryService();

    // Récupère et affiche tous les sous-categories.
    async getAll(req: Request, res: Response) {
        console.log("SubCategoryController - GetAll");
        const subCategories = await this.subCategoryService.getAll();
        res.status(200).json({status: "OK", data: subCategories});
      
    }

    // Récupère une sous-catégorie par son ID.
    async getByCategoryId(req: Request, res: Response) {
        console.log("SubCategoryController - GetByCategoryId");
        const categoryId = Number(req.params.categoryId);
        const subCategories = await this.subCategoryService.getByCategoryId(categoryId);
        res.status(200).json({status: "OK", data: subCategories});
    }

}