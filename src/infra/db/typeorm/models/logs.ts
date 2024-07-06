import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Logs {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ nullable: false })
    action_id!: number;

    @Column({ nullable: false })
    account_id!: number;

    @Column({ nullable: false })
    category_id!: number;

    @Column({ nullable: false })
    item_id!: number;

    @CreateDateColumn({ nullable: false })
    created_at!: Date;

    @UpdateDateColumn({ nullable: false })
    updated_at!: Date;
}