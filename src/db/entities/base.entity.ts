import { CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseEntity {
    @PrimaryGeneratedColumn()
    id: string

    @CreateDateColumn({ type: 'timestamptz' })
    create_at: Date

    @UpdateDateColumn({ type: 'timestamptz' })
    update_at: Date

    @DeleteDateColumn({ type: 'timestamptz' })
    deleted_at: Date
}