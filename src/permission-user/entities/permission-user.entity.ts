import { BaseEntity } from "src/db/entities/base.entity";
import { Permission } from "src/permissions/entities/permission.entity";
import { User } from "src/user/entities/user.entity";
import { Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class PermissionUser extends BaseEntity {
    @ManyToOne(() => User, user => user.permissionUser)
    @JoinColumn({ name: 'user_id' })
    user: User

    @ManyToOne(() => Permission, permission => permission.permissionUser)
    @JoinColumn({ name: 'permission_id' })
    permission: Permission
}
