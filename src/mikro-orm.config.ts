import { MikroORM } from '@mikro-orm/core'
import path from 'path'
import { mikroConfig, __prod__ } from './constants'
import { AdditionalOptions } from './env'

const defaultOptions: AdditionalOptions = { ...mikroConfig }

export const buildConf = (
  mode: string | undefined,
  dOpts: AdditionalOptions = defaultOptions,
): AdditionalOptions => {
  if (mode === undefined) return dOpts

  switch (mode) {
    case 'production':
      return {
        ...dOpts,
        port: 5433,
        debug: true,
        retryConnect: false,
      }

    case 'cproduction':
      return {
        ...dOpts,
        host: 'db',
        debug: true,
        retryConnect: true,
        migrations: {
          ...dOpts.migrations,
          path: path.join(__dirname, './migrations'),
          pattern: /^[\w-]+\d+\.js$/,
          emit: 'ts',
        },
      }

    default:
      return dOpts
  }
}

export const connectMikro = async (
  conf: AdditionalOptions = buildConf(__prod__),
): Promise<MikroORM | null> => {
  let mikro: MikroORM | null = null

  if (conf.retryConnect)
    while (conf.retryCount) {
      mikro = await MikroORM.init(conf)

      if (await mikro.isConnected()) break

      console.log(
        `Couldnt make Mikro-Orm connection, attempts left ${conf.retryCount}`,
      )
      await new Promise((resolve) => setTimeout(resolve, 3000))

      if (conf.retryCount) conf.retryCount--
    }
  else mikro = await MikroORM.init(conf)

  return mikro
}
