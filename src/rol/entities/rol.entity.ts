import { BaseEntity } from "src/db/entities/base.entity"
import { RolPermission } from "src/rol-permissions/entities/rol-permission.entity"
import { UserRol } from "src/user-rol/entities/user-rol.entity"
import { Column, Entity, OneToMany } from "typeorm"

@Entity()
export class Rol extends BaseEntity {
    @Column('text')
    name: string

    @Column('text')
    description: string

    @OneToMany(() => UserRol, userRol => userRol.rol)
    userRol: UserRol[]

    @OneToMany(() => RolPermission, rolPermission => rolPermission.rol)
    rolPermission: RolPermission[]
}
