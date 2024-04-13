import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SubCategory } from "./SubCategory";

@Entity()
export class Category{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    icon_url: string;

    @OneToMany(() => SubCategory, subCategory => subCategory.category1)
    subCategories1: SubCategory[];

    @OneToMany(() => SubCategory, subCategory => subCategory.category2)
    subCategories2: SubCategory[];
}