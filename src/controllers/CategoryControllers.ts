import { Request, Response } from "express";
import { CategoryService } from "../services/CategoryServices";

export class CategoryController {
    private categoryService = new CategoryService();

    async getAll(req: Request, res: Response) {
        console.log("CategoryController - GetAll");
        const categories = await this.categoryService.getAll();
        res.status(200).json({status: "OK", data: categories});
      
    }

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