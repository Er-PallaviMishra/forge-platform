import { z } from 'zod';
export const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PORT: z.coerce.number().default(3000),
  DB_Host: z.string().default('localhost'),
  DB_Port: z.coerce.number().default(5432),
  DB_Name: z.string().default('forge'),
  DB_User: z.string().default('forge'),
  DB_Password: z.string().default('forge_dev_password'),
  DB_ACCESS_TOKEN: z.string().min(1),
});
export type EnvSchema = z.infer<typeof envSchema>;
