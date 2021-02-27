import { Options } from '@mikro-orm/core'

interface IOptions {
  retryConnect?: boolean | false
  retryCount?: number
}

export type AdditionalOptions = IOptions & Options
