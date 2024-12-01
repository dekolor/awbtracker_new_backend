import { sql } from 'drizzle-orm';
import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';
export const awbsTable = sqliteTable('awbs_table', {
  id: int().primaryKey({ autoIncrement: true }),
  trackingNumber: text().notNull(),
  createdAt: text('timestamp')
    .notNull()
    .default(sql`(current_timestamp)`),
});
