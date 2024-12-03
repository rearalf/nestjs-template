import { Module } from '@nestjs/common';
import { RolPermissionsService } from './rol-permissions.service';
import { RolPermissionsController } from './rol-permissions.controller';

@Module({
  controllers: [RolPermissionsController],
  providers: [RolPermissionsService],
})
export class RolPermissionsModule {}
