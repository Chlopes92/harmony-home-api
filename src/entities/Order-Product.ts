import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Order } from "./Order";
import { Product } from "./Product";

@Entity('Order-Product')
export class OrderProduct {
    @PrimaryColumn()
    order_id: number;

    @PrimaryColumn()
    product_id: number;

    @Column()
    quantity: number;

    @ManyToOne(() => Order, order => order.orderProducts)
    @JoinColumn({ name: 'order_id' })
    order: Order;

    @ManyToOne(() => Product, product => product.orderProducts)
    @JoinColumn({ name: 'product_id' })
    product: Product;
}