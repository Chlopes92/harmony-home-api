import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Adress } from "./Adress";
import { Product } from "./Product";
import { Order } from "./Order";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false }) // Le champ ne peut pas être null & par défaut à false
    name: string;

    @Column()
    firstname: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    phone: string;

    @OneToOne(() => Adress, (adress) => adress.user, {
        nullable: true // Cette relation peut être null
    }) 
    @JoinColumn( { name: "adress_user" } )
    adress: Adress

    @ManyToMany(() => Product)
    @JoinTable({ name: "Wishlist",
        joinColumn: {
            name: 'user_id', 
            referencedColumnName: 'id' 
        },
        inverseJoinColumn: {
            name: 'product_id', 
            referencedColumnName: 'id' 
        }
    })
    products: Product[]

    @OneToMany(() => Order, (order) => order.user)
    orders: Order[]

}