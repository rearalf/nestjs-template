import { Column, Entity, OneToMany } from 'typeorm';

import { UserRol } from 'src/user-rol/entities/user-rol.entity';
import { BaseEntity } from 'src/db/entities/base.entity';

@Entity()
export class User extends BaseEntity {
  @Column('text')
  first_name: string;

  @Column('text')
  first_lastName: string;

  @Column('text')
  second_name: string;

  @Column('text')
  second_lastName: string;

  @Column('text', {
    nullable: true,
  })
  married_name: string;

  @Column('text', {
    unique: true,
  })
  email: string;

  @Column('text')
  password: string;

  @OneToMany(() => UserRol, (userRol) => userRol.user, { eager: true })
  userRol: UserRol[];
}
