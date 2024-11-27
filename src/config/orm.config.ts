import 'dotenv/config'
import { type DataSourceOptions } from 'typeorm'
import { type BaseDataSourceOptions } from 'typeorm/data-source/BaseDataSourceOptions'

type DatabaseType = 'postgres' | 'mongodb'

const config: DataSourceOptions | BaseDataSourceOptions = {
    type: process.env.DB_TYPE as DatabaseType || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: +process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || 'database-template',
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'root',
    synchronize: false,
    migrationsRun: true,
}

export default config