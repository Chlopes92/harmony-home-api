import AppDataSource from "../data-source";
import { Category } from "../entities/Category";


export class CategoryService {
    private categoryRepository = AppDataSource.getRepository(Category) // Accès au repository Category pour les opérations CRUD.

    // Récupère tous les catégories.
    async getAll() {
        console.log("CategoryService - GetAll");return this.categoryRepository.find({
            order: {
                id: "ASC"  // Tri par 'id' en ordre croissant
            }
        });
    }

    // Récupère une catégorie par son ID.
    async getById(id: number) {
        console.log("CategoryService - GetById");
        return this.categoryRepository.findOneBy({ id: id });
    }
}