import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";
import { Product } from "./Product";


@Entity('Sub-Category') // Déclaration qui relie cette classe à la table 'Sub-Category' dans la bdd.
export class SubCategory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    img_url: string;

    @ManyToOne(() => Category, category => category.subCategories1) // Relation plusieurs-à-un avec Category.
    @JoinColumn({ name: 'category_id_1' }) // Colonne de jointure spécifiée pour la relation.
    category1: Category;

    @ManyToOne(() => Category, category => category.subCategories2) // Relation plusieurs-à-un avec Category.
    @JoinColumn({ name: 'category_id_2' }) // Colonne de jointure spécifiée pour la 2ème relation.
    category2: Category;

    @OneToMany(() => Product, (product) => product.subCategory) // Relation un-à-plusieurs avec Product.
    products: Product[] // Les Produits associés à cette sous-catégorie.
}