import AppDataSource from "../data-source";
import { Product } from "../entities/Product";

export class ProductService {
    private productRepository = AppDataSource.getRepository(Product) // Accès au repository Product pour les opérations CRUD.

    // Récupère tous les products.
    async getAll() {
        console.log("ProductService - GetAll");
        return this.productRepository.find();
    }

    // Récupère un produit par son ID.
    async getBySubCategoryId(subCategoryId: number) {
        console.log("ProductService - GetBySubCategoryId");
        return this.productRepository.find({ 
            // Retourne les products associées à productSubId. Formule spécifique à typeorm pour remplacer les requêtes SQL
            where: {
                subCategory: { id: subCategoryId }, // Cherche les products où 'subCategory' =  'productSubId'.
            }
                
        });
    }

}