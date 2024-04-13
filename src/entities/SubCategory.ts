import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";
import { Product } from "./Product";


@Entity()
export class SubCategory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    img_url: string;

    @ManyToOne(() => Category, category => category.subCategories1)
    @JoinColumn({ name: 'category_id_1' })
    category1: Category;

    @ManyToOne(() => Category, category => category.subCategories2)
    @JoinColumn({ name: 'category_id_2' }) 
    category2: Category;

    @OneToMany(() => Product, (product) => product.subCategory)
    products: Product[]
}