import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { JoiValidationSchema } from './config/joi.validation';
import { EnvConfiguration } from './config/env.config';

import { AppService } from './app.service';
import typeorm from './config/typeorm';

import { RolModule } from './rol/rol.module';
import { UserModule } from './user/user.module';
import { UserRolModule } from './user-rol/user-rol.module';
import { PermissionsModule } from './permissions/permissions.module';
import { RolPermissionsModule } from './rol-permissions/rol-permissions.module';
import { PermissionUserModule } from './permission-user/permission-user.module';

@Module({
  imports: [
    ConfigModule,
    ConfigModule.forRoot({
      load: [EnvConfiguration, typeorm],
      validationSchema: JoiValidationSchema
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({ ...config.get('database'), autoLoadEntities: true }),
      inject: [ConfigService]
    }),
    UserModule,
    RolModule,
    UserRolModule,
    PermissionsModule,
    RolPermissionsModule,
    PermissionUserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
