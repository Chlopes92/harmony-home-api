import { Router } from "express";
import { ProductController } from "../controllers/ProductControllers";

const productRouter = Router();
const productController = new ProductController();

productRouter.get("/", (req, res) => {
    console.log("ProductRouter - GET");
    productController.getAll(req, res);
});

productRouter.get("/:id", (req, res) => {
    console.log("ProductRouter - GetById");
    productController.getById(req, res);
});

productRouter.get("/by-sub-category/:subCategoryId", (req, res) => {
    console.log("ProductRouter - GetBySubCategoryId");
    productController.getBySubCategoryId(req, res);
});

// Rechercher un product par son titre
productRouter.get("/search/:title", (req, res) => {
    console.log("ProductRouter - SearchByTitle");
    productController.searchProduct(req, res)
});

export default productRouter; 