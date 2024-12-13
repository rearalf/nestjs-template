<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Resources

## Stay in touch

## License

## Configuraciones

### Variables de entorno

Usando los paquetes [joi](https://www.npmjs.com/package/joi) y [@nestjs/config](https://docs.nestjs.com/techniques/configuration) para agregar la configuración de las variables de entorno. Primero, agregamos estas líneas al `app.module.ts`.

```TS
@Module({
  imports: [
    ConfigModule,
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

Crear los archivos llamados `env.config.ts` y `joi.validation.ts`.

```TS
// env.config.ts
export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV,
  db_host: process.env.DB_HOST,
  db_port: +process.env.DB_PORT,
  database: process.env.DB_NAME,
  db_username: process.env.DB_USERNAME,
  db_password: process.env.DB_PASSWORD,
  seed_email: process.env.SEED_EMAIL,
  seed_password: process.env.SEED_PASSWORD,
});
```

```TS
// joi.validation.ts
import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  NODE_ENV: Joi.string().default('dev'),
  PORT: Joi.number().default(3000),
  DB_HOST: Joi.string().default('localhost'),
  DB_NAME: Joi.string().default('database-example'),
  DB_USERNAME: Joi.string().default('root'),
  DB_PASSWORD: Joi.string().default('root'),
  DB_PORT: Joi.number().default(5432),
});
```

Ahora en el constructor de nuestro servicio agregamos el `configService` para poder utilizar las variables. Por ejemplo lo agregamos en el `app.services.ts`.

```TS
@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getHello(): string {
    console.log(this.configService.get('DB_USERNAME'));
    return 'Hello World!';
  }
}
```

### Configuración de docker

Por ahora solo tengo la configuración para la base de datos, más adelante se agregaran las configuraciones para el backend completo. El `docker-compase.yml` ya contiene las variables de entorno y también están en el `.env`.

```YML
services:
  postgres:
    image: postgres
    container_name: ${CONTAINER_NAME}
    ports:
      - "5432:5432"
    environment:
      - DATABASE_HOST=${DB_HOST}
      - POSTGRES_DB=${DB_NAME}
      - POSTGRES_USER=${DB_USERNAME}
      - POSTGRES_PASSWORD=${DB_PASSWORD}
```

Para ejecutarlo pon en cosola:

```
$ docker-compose up
```

### Configuracion de TypeORM

Para configurar [TypeORM](https://typeorm.io/), debemos ir al archivo `config/typeorm.ts`, dentro de el agregamos nuestra configuración.

```TS
import { BaseDataSourceOptions } from 'typeorm/data-source/BaseDataSourceOptions';
import { DataSource, type DataSourceOptions } from 'typeorm';
import { registerAs } from '@nestjs/config';
import 'dotenv/config';

type DatabaseType = 'postgres' | 'mongodb';

// Configuración de conexión para la base de datos.
const config: DataSourceOptions | BaseDataSourceOptions = {
  type: (process.env.DB_TYPE as DatabaseType) || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: +process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'database-template',
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'root',
  synchronize: false,
  migrationsRun: false,
  entities: ['dist/**/entities/*.entity{.ts,.js}'],
  migrations: ['dist/db/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  logging: process.env.LOGGING === 'true',
};

// Exporta la configuración de la base de datos como un proveedor para NestJS.
export default registerAs('database', () => config);

// Crea y exporta una instancia de conexión a la base de datos usando la configuración definida.
// Esto permite inicializar y usar `DataSource` directamente en otros módulos.
export const databaseConnect = new DataSource(config as DataSourceOptions);
```

### Migraciones

Las migraciones las hace [TypeORM](https://typeorm.io/), primero ejecutamos el comando:

```bash
$ npm run migration:generate --name=Init
$ npm run migration:run
```
