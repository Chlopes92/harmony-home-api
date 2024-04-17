import { Router } from "express";
import { ProductController } from "../controllers/ProductControllers";

const productRouter = Router();
const productController = new ProductController();

productRouter.get("/", (req, res) => {
    console.log("ProductRouter - GET");
    productController.getAll(req,res);
});

productRouter.get("/:subCategoryId", (req, res) => {
    console.log("ProductRouter - GetBySubCategoryId");
    productController.getBySubCategoryId(req, res);
});

export default productRouter; 