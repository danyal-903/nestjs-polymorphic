import { plainToClass } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsString,
  validateSync,
} from 'class-validator';

enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
  Provision = 'provision',
}

enum Database {
  Postgres = 'postgres',
  MongoDB = 'mongodb',
  MySQL = 'mysql',
}

export class EnvironmentVariables {
  @IsString()
  npm_package_name: string;

  @IsString()
  npm_package_version: string;

  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsNumber()
  PORT: number;

  @IsString()
  TYPEORM_CONNECTION: string;

  @IsString()
  TYPEORM_HOST: string;

  @IsString()
  TYPEORM_USERNAME: string;

  @IsString()
  TYPEORM_PASSWORD: string;

  @IsString()
  TYPEORM_DATABASE: string;

  @IsNumber()
  TYPEORM_PORT: number;

  @IsBoolean()
  TYPEORM_SYNCHRONIZE: boolean;

  @IsBoolean()
  TYPEORM_MIGRATIONS_RUN: boolean;

  @IsBoolean()
  TYPEORM_LOGGING: boolean;

  @IsString()
  TYPEORM_ENTITIES: string;

  @IsString()
  TYPEORM_MIGRATIONS: string;

  @IsString()
  TYPEORM_MIGRATIONS_DIR: string;

  @IsString()
  REDIS_HOST: string;

  @IsNumber()
  REDIS_PORT: number;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
