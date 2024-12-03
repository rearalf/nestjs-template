import { BaseEntity } from "src/db/entities/base.entity";
import { Permission } from "src/permissions/entities/permission.entity";
import { Rol } from "src/rol/entities/rol.entity";
import { Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class RolPermission extends BaseEntity {
    @ManyToOne(() => Rol, rol => rol.rolPermission)
    @JoinColumn({ name: 'rol_id' })
    rol: Rol

    @ManyToOne(() => Permission, permission => permission.rolPermission)
    @JoinColumn({ name: 'permission_id' })
    permission: Permission
}
