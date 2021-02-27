import { BaseEntity, Entity, PrimaryKey, Property } from '@mikro-orm/core'
import { EntityOptions } from '@mikro-orm/core/decorators/Entity'

const options: EntityOptions<Alert> = {
  tableName: 'alerts',
}
/* Defining the structure of the entity that represents a row in a Postgresql database table.
    These properties represent the columns and the data types they represent */
@Entity(options)
export class Alert extends BaseEntity<Alert, 'id'> {
  @Property({ type: 'text' })
  symbol!: string

  @Property({ type: 'text' })
  timeFrame!: string

  @Property({ type: 'text' })
  trade!: string

  @Property({ type: 'date' })
  time = new Date()

  @PrimaryKey({ type: 'text' })
  id!: string

  @Property({ onUpdate: () => new Date(), type: 'date' })
  updatedAt = new Date()

  @Property({ type: 'date' })
  createdAt = new Date()
}
