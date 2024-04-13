import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SubCategory } from "./SubCategory";
import { OrderProduct } from "./Order-Product";

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    dimension: string;

    @Column({ type: "json" })
    features: string[];

    @Column("float")
    price: number;
    
    @Column()
    img_url: string;

    @ManyToOne(() => SubCategory, subCategory => subCategory.products)
    @JoinColumn({ name: "sub_category_id" })
    subCategory: SubCategory[];

    @OneToMany(() => OrderProduct, orderProduct => orderProduct.product)
    orderProducts: OrderProduct[];
}