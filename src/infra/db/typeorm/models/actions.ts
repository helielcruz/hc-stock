import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Actions {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ nullable: false })
    label!: string;

    @CreateDateColumn({ nullable: false })
    created_at!: Date;

    @UpdateDateColumn({ nullable: false })
    updated_at!: Date;
}