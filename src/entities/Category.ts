import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SubCategory } from "./SubCategory";

@Entity('Category') // Déclaration qui relie cette classe à la table 'Category' dans la bdd.
export class Category{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    icon_url: string;

    @OneToMany(() => SubCategory, subCategory => subCategory.category1) // Relation un-à-plusieurs SubCategory via category1.
    subCategories1: SubCategory[];

    @OneToMany(() => SubCategory, subCategory => subCategory.category2) // Relation un-à-plusieurs SubCategory via category2.
    subCategories2: SubCategory[];
}