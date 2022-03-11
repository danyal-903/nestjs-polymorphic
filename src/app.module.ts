import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvironmentVariables, validate } from './env.validation';
import { PolyModule } from './poly/poly.module';

@Module({
  imports: [
    PolyModule,
    ConfigModule.forRoot({ isGlobal: true, validate }),
    TypeOrmModule.forRoot(),
    BullModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService<EnvironmentVariables>) => ({
        redis: {
          host: configService.get('REDIS_HOST'),
          port: +configService.get('REDIS_PORT'),
        },
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
