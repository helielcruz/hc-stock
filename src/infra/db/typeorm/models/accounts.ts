import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity({name: 'accounts'})
export class Accounts {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ nullable: false })
    name!: string;

    @Column({ nullable: false })
    lastname!: string;

    @Column({ unique: true, nullable: false })
    email!: string;

    @Column({ unique: true, nullable: false })
    password!: string;

    @Column({ nullable: false })
    role_id!: number;

    @CreateDateColumn({ nullable: false })
    created_at!: Date;

    @UpdateDateColumn({ nullable: false })
    updated_at!: Date;
}