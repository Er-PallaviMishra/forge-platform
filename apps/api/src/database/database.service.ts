import { Injectable,OnModuleDestroy,OnModuleInit } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private readonly pool = new Pool({
    host : process.env.DB_Host,
    port : Number(process.env.DB_Port),
    database : process.env.DB_Name,
    user : process.env.DB_User,
    password : process.env.DB_Password,
  });

  async onModuleInit() {
    await this.pool.query('SELECT 1');
  }

  async onModuleDestroy() {
    await this.pool.end();
  }
}
