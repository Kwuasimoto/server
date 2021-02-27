import { Migration } from '@mikro-orm/migrations';

export class Migration20210226002436 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "alerts" ("id" text not null, "symbol" text not null, "time_frame" text not null, "trade" text not null, "time" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "created_at" timestamptz(0) not null);');
    this.addSql('alter table "alerts" add constraint "alerts_pkey" primary key ("id");');
  }

}
