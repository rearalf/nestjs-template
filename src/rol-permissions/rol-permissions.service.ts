import { Injectable } from '@nestjs/common';
import { CreateRolPermissionDto } from './dto/create-rol-permission.dto';
import { UpdateRolPermissionDto } from './dto/update-rol-permission.dto';

@Injectable()
export class RolPermissionsService {
  create(createRolPermissionDto: CreateRolPermissionDto) {
    return 'This action adds a new rolPermission';
  }

  findAll() {
    return `This action returns all rolPermissions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rolPermission`;
  }

  update(id: number, updateRolPermissionDto: UpdateRolPermissionDto) {
    return `This action updates a #${id} rolPermission`;
  }

  remove(id: number) {
    return `This action removes a #${id} rolPermission`;
  }
}
