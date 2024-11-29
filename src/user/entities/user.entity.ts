import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string

    @Column('text')
    first_name: string

    @Column('text')
    first_lastName: string

    @Column('text')
    second_name: string

    @Column('text')
    second_lastName: string

    @Column('text', {
        nullable: true
    })
    married_name: string

    @Column('text', {
        unique: true
    })
    email: string

    @Column('text')
    password: string

    @Column('timestamptz')
    created_at: Date

    @Column('timestamptz')
    updated_at: Date

    @Column('timestamptz')
    deleted_at: Date
}
