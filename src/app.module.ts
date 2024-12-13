import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from './app.service';

import typeorm from './config/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';
import { UserModule } from './user/user.module';
import { UserRolModule } from './user-rol/user-rol.module';
import { RolModule } from './rol/rol.module';

@Module({
  imports: [
    ConfigModule,
    ConfigModule.forRoot({
      load: [EnvConfiguration, typeorm],
      validationSchema: JoiValidationSchema,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        ...config.get('database'),
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
    UserModule,
    UserRolModule,
    RolModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
