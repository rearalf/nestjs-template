import { PartialType } from '@nestjs/mapped-types';
import { CreatePermissionUserDto } from './create-permission-user.dto';

export class UpdatePermissionUserDto extends PartialType(CreatePermissionUserDto) {}
