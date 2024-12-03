import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolPermissionsService } from './rol-permissions.service';
import { CreateRolPermissionDto } from './dto/create-rol-permission.dto';
import { UpdateRolPermissionDto } from './dto/update-rol-permission.dto';

@Controller('rol-permissions')
export class RolPermissionsController {
  constructor(private readonly rolPermissionsService: RolPermissionsService) {}

  @Post()
  create(@Body() createRolPermissionDto: CreateRolPermissionDto) {
    return this.rolPermissionsService.create(createRolPermissionDto);
  }

  @Get()
  findAll() {
    return this.rolPermissionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolPermissionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRolPermissionDto: UpdateRolPermissionDto) {
    return this.rolPermissionsService.update(+id, updateRolPermissionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolPermissionsService.remove(+id);
  }
}
