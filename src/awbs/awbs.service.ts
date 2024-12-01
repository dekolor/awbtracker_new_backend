import { Injectable } from '@nestjs/common';
import { Awb } from './interfaces/awb.interface';
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import { awbsTable } from 'src/db/schema';
const db = drizzle(process.env.DB_FILE_NAME!);

@Injectable()
export class AwbsService {
  async findAll(): Promise<Awb[]> {
    const awbs = await db.select().from(awbsTable);
    return awbs;
  }
}
