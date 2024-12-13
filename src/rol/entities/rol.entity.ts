import { Column, Entity, OneToMany } from 'typeorm';

import { UserRol } from 'src/user-rol/entities/user-rol.entity';
import { BaseEntity } from 'src/db/entities/base.entity';

@Entity()
export class Rol extends BaseEntity {
  @Column('text')
  name: string;

  @Column('text')
  description: string;

  @OneToMany(() => UserRol, (userRol) => userRol.rol, { eager: true })
  userRol: UserRol[];
}
