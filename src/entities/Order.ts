import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Product } from "./Product";
import { OrderProduct } from "./Order-Product";


@Entity()
export class Order{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'timestamp'})
    date: Date;

    @Column()
    payement: boolean;

    @ManyToOne(() => User, user => user.orders)
    @JoinColumn({ name: "user_id" })
    user: User[];

    @OneToMany(() => OrderProduct, orderProduct => orderProduct.order)
    orderProducts: OrderProduct[];

    // @ManyToMany(() => Product)
    // @JoinTable({ name: "Order-Product", 
    // joinColumn: {
    //     name: 'order_id', 
    //     referencedColumnName: 'id' 
    // },
    // inverseJoinColumn: {
    //     name: 'product_id', 
    //     referencedColumnName: 'id' 
    // }
    // })
    // products: Product[]

}