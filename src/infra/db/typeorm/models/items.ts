import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinTable, OneToOne, OneToMany } from "typeorm"
import { Categories } from "./categories";
import { Accounts } from "./accounts";

@Entity()
export class Items {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ nullable: false })
    title!: string;

    @Column({ nullable: false })
    description!: string;

    @Column({ nullable: false })
    category_id!: number;

    @Column({ nullable: false })
    account_id!: number;

    @CreateDateColumn({ nullable: false })
    created_at!: Date;

    @UpdateDateColumn({ nullable: false })
    updated_at!: Date;

    @ManyToOne(() => Accounts, (account: any) => account.id)
    @JoinTable()
    account: Accounts

    @ManyToOne(() => Categories, (category: any) => category.id)
    @JoinTable()
    category: Categories
}