// Importation des décorateurs et types nécessaires depuis TypeORM.
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Adress } from "./Adress";
import { Product } from "./Product";
import { Order } from "./Order";


@Entity('User') // Déclaration qui relie cette classe à la table 'User' dans la bdd.
export class User {
    @PrimaryGeneratedColumn() // ID auto-généré pour chaque utilisateur.
    id: number;

    @Column({ nullable: false }) // Le champ ne peut pas être null & par défaut à false 
    name: string;

    @Column()
    firstname: string;

    @Column({ unique: true }) // Rend l'email unique dans la base de données.
    email: string;

    @Column()
    password: string;

    @Column()
    phone: string;

    @OneToOne(() => Adress, (adress) => adress.user, {
        nullable: true // Cette relation peut être null
    }) 
    @JoinColumn( { name: "adress_user" } ) // Relation un-à-un avec Adress, pouvant être nulle.
    adress: Adress

    @ManyToMany(() => Product)
    @JoinTable( // Configure la table de jointure pour les produits de la Wishlist.
        { name: "Wishlist", 
        joinColumn: {
            name: 'user_id', 
            referencedColumnName: 'id' 
        },
        inverseJoinColumn: {
            name: 'product_id', 
            referencedColumnName: 'id' 
        }
    })
    products: Product[] // Les Produits dans la Wishlist de l'User.

    @OneToMany(() => Order, (order) => order.user) // Relations un-à-plusieurs avec les commandes.
    orders: Order[] // Commandes passées par l'utilisateur.

}