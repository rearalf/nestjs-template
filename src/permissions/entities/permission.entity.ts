import { BaseEntity } from "src/db/entities/base.entity";
import { PermissionUser } from "src/permission-user/entities/permission-user.entity";
import { RolPermission } from "src/rol-permissions/entities/rol-permission.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToMany, OneToMany } from "typeorm";

@Entity()
export class Permission extends BaseEntity {
    @Column({ type: 'text', unique: true })
    name: string

    @Column({ type: 'text' })
    description: string

    @OneToMany(() => RolPermission, rolPermission => rolPermission.permission)
    rolPermission: RolPermission[]

    @OneToMany(() => PermissionUser, permissionUser => permissionUser.permission)
    permissionUser: PermissionUser[]
}
