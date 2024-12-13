import { Entity, JoinColumn, ManyToOne } from 'typeorm';

import { BaseEntity } from 'src/db/entities/base.entity';
import { User } from 'src/user/entities/user.entity';
import { Rol } from 'src/rol/entities/rol.entity';

@Entity()
export class UserRol extends BaseEntity {
  @ManyToOne(() => User, (user) => user.userRol)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Rol, (rol) => rol.userRol)
  @JoinColumn({ name: 'rol_id' })
  rol: Rol;
}
