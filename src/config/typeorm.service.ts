
import { DataSource, type DataSourceOptions } from 'typeorm'
import { registerAs } from '@nestjs/config'
import config from './orm.config'

export default registerAs('database', () => config)
export const databaseConnect = new DataSource(config as DataSourceOptions)