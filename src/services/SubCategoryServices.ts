import AppDataSource from "../data-source";
import { SubCategory } from "../entities/SubCategory";

export class SubCategoryService {
    private subCategoryRepository = AppDataSource.getRepository(SubCategory) // Accès au repository SubCategory pour les opérations CRUD.

    // Récupère tous les sous-catégories.
    async getAll() {
        console.log("SubCategoryService - GetAll");
        return this.subCategoryRepository.find(); // Retourne toutes les sous-catégories.
    }

    // Récupère une sous-catégorie par son ID.
    async getByCategoryId(categoryId: number) {
        console.log("SubCategoryService - GetByCategoryId");
        return this.subCategoryRepository.find({ 
            // Retourne les sous-catégories associées à categoryId. Formule spécifique à typeorm pour remplacer les requêtes SQL
            where: [
                { category1: { id: categoryId }}, // Cherche les sous-catégories où 'category1' =  'categoryId'.
                { category2: { id: categoryId }} // Cherche les sous-catégories où 'category2' =  'categoryId'.
            ]
                
        });
    }
}