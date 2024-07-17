import { Like } from "typeorm";
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
    async getById(id: number) {
        console.log("ProductService - GetById");
        return this.productRepository.findOneBy({ id: id });
    }

    // Récupère un produit par l'ID de la sous-catégorie.
    async getBySubCategoryId(subCategoryId: number) {
        console.log("ProductService - GetBySubCategoryId");
        return this.productRepository.find({ 
            // Retourne les products associées à productSubId. Formule spécifique à typeorm pour remplacer les requêtes SQL
            where: {
                subCategory: { id: subCategoryId }, // Cherche les products où 'subCategory' =  'productSubId'.
            }
                
        });
    }

    // Rechercher des produits par leur titre
  async getByTitle(title: string): Promise<Product[]> {
    console.log("ProductService - GetByTitle", title);
    try {
      const products = await this.productRepository
        .createQueryBuilder("product")
        .where("product.title ILIKE :title", { title: `%${title}%` }) // ILIKE pour insensible à la casse
        .getMany();
      console.log("Found products:", products);
      return products;
    } catch (error) {
      console.error("Error in ProductService - GetByTitle:", error);
      throw error;
    }
  }

}