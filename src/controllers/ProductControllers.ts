import { Request, Response } from "express";
import { ProductService } from "../services/ProductServices";


export class ProductController {
    // Instanciation du ProductService en l'assigniant à la propriété productService de la classe ProductController.
    // Cette instance est accessible uniquement dans cette classe.
    private productService = new ProductService();

    // Récupère et affiche tous les produits.
    async getAll(req: Request, res: Response) {
        console.log("ProductController - GetAll");
        const products = await this.productService.getAll();
        res.status(200).json({status: "OK", data: products});
      
    }

    // Récupère un produit par son ID.
    async getById(req: Request, res: Response) {
        console.log("ProductController - GetById");
        const productId = Number(req.params.id);
        const product = await this.productService.getById(productId);
        if(product) {
            res.status(200).json({status: "OK", data: product});
        } else {
            res.status(401).json({ message: "This product doesn't exist!" });
        }
        
    }

    // Récupère un produit par l'ID de la sous-catégorie.
    async getBySubCategoryId(req: Request, res: Response) {
        console.log("ProductController - GetBySubCategoryId");
        const subCategoryId = Number(req.params.subCategoryId);
        const products = await this.productService.getBySubCategoryId(subCategoryId);
        if(products) {
            res.status(200).json({status: "OK", data: products});
        } else {
            res.status(401).json({ message: "This list of products doesn't exist!" });
        }
        
    }

    

}