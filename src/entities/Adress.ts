import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";


@Entity()
export class Adress {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    street: string;

    @Column()
    number: string;

    @Column()
    country: string;

    @Column()
    city: string;

    @Column({ nullable: true })
    floor: string;

    @Column()
    postcode: string;

    @OneToOne(() => User, (user) => user.adress) // specify inverse side as a second parameter
    user: User

}