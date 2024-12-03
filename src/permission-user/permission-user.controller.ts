import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PermissionUserService } from './permission-user.service';
import { CreatePermissionUserDto } from './dto/create-permission-user.dto';
import { UpdatePermissionUserDto } from './dto/update-permission-user.dto';

@Controller('permission-user')
export class PermissionUserController {
  constructor(private readonly permissionUserService: PermissionUserService) {}

  @Post()
  create(@Body() createPermissionUserDto: CreatePermissionUserDto) {
    return this.permissionUserService.create(createPermissionUserDto);
  }

  @Get()
  findAll() {
    return this.permissionUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.permissionUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePermissionUserDto: UpdatePermissionUserDto) {
    return this.permissionUserService.update(+id, updatePermissionUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.permissionUserService.remove(+id);
  }
}
