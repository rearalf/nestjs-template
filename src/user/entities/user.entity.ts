import { BaseEntity } from "src/db/entities/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity{
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
}
