import { Module } from '@nestjs/common';
import { PermissionUserService } from './permission-user.service';
import { PermissionUserController } from './permission-user.controller';

@Module({
  controllers: [PermissionUserController],
  providers: [PermissionUserService],
})
export class PermissionUserModule {}
