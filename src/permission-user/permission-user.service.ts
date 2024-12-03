import { Injectable } from '@nestjs/common';
import { CreatePermissionUserDto } from './dto/create-permission-user.dto';
import { UpdatePermissionUserDto } from './dto/update-permission-user.dto';

@Injectable()
export class PermissionUserService {
  create(createPermissionUserDto: CreatePermissionUserDto) {
    return 'This action adds a new permissionUser';
  }

  findAll() {
    return `This action returns all permissionUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} permissionUser`;
  }

  update(id: number, updatePermissionUserDto: UpdatePermissionUserDto) {
    return `This action updates a #${id} permissionUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} permissionUser`;
  }
}
