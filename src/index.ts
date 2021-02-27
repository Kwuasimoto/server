import 'dotenv-safe/config'
import { __prod__ } from './constants'
import express from 'express'
import { MikroORM } from '@mikro-orm/core'
import { connectMikro } from './mikro-orm.config'
import { Alert } from './entities/Alert'
import { nanoid } from 'nanoid'

const main = async () => {
  const orm: MikroORM | null = await connectMikro()

  try {
    if (orm) {
      await orm.getMigrator().up()

      const alert = orm.em.create(Alert, {
        id: nanoid().toString(),
        timeFrame: '3',
        trade: 'Buy',
        symbol: 'BTCUSDT',
      })

      await orm.em.persistAndFlush(alert)
    } else throw new Error('Could not connect Mikro-orm :(')
  } catch (e) {
    console.log(e.message)
  }
}

main().catch((err) => {
  console.error(err)
})
// --
