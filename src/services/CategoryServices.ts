import AppDataSource from "../data-source";
import { Category } from "../entities/Category";


export class CategoryService {
    private categoryRepository = AppDataSource.getRepository(Category)

    async getAll() {
        console.log("CategoryService - GetAll");
        return this.categoryRepository.find();
    }

    async getById(id: number) {
        console.log("CategoryService - GetById");
        return this.categoryRepository.findOneBy({ id: id });
    }
}