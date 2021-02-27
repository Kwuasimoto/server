import { MigrationsOptions } from '@mikro-orm/core/utils/configuration'
import path from 'path'
import { Alert } from './entities/Alert'
import { AdditionalOptions } from './env'

// Constant exports
export const __prod__ = process.env.PRODUCTION

/* Setup the MikroOrm Migrations Configuration.

    @param {tableName} - The name of the table to create in the database
    @param {path} - The path to the folder containing the migrations.
    @param {pattern} - The pattern used to match migration files.
    @param {transactional} - are the migrations transactional?.
    @param {allOrNothing} - true | false.*/

const migrations: MigrationsOptions | undefined = {
  tableName: process.env.MIGRATION_TABLE_NAME || 'migrations',
  path: path.join(__dirname, './migrations'), // path to folder with migration files
  pattern: /^[\w-]+\d+\.[tj]s$/, // how to match migration files
  transactional: process.env.TRANSACTIONAL !== 'false', // also default value
  allOrNothing: process.env.ALL_OR_NOTHING !== 'false', // also default value
}

/* Setup the MikroOrm Database Configuration.

    @param {entities} - The Relations in the Postgresql Database 
    @param {migrations} - The migration files for automatically setting up the database.
    @param {dbName} - The name of the database to connect to.
    @param {user} - The db user to connect as.
    @param {host} - The host to connect to.
    @param {password} - The db password to connect with.
    @param {debug} - checks production environment variable.
    @param {type} - The type of database that MikroOrm will be micro managing. 
    @param [retryConnect} - Used with docker compose to handle first mikro-orm cold start connection*/

const mikroConfig: AdditionalOptions = {
  entities: [Alert],

  migrations: migrations,

  dbName: process.env.DB_NAME || 'postgres',
  port: parseInt(process.env.DB_PORT || '5432'),
  user: process.env.USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  password: process.env.DB_PASSWORD || 'secret',

  type: process.env.DB_TYPE === undefined ? 'mysql' : 'postgresql',
  debug: process.env.DB_DEBUG !== 'false',
  retryConnect: process.env.DB_RETRY !== 'false',
  retryCount: 5,
}

export { mikroConfig }
