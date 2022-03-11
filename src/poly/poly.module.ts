import { Module } from '@nestjs/common';
import { MainMysqlModule } from '../main-mysql.module';
import { PolyController } from './poly.controller';
import { PolyService } from './poly.service';

@Module({
  imports: [MainMysqlModule],
  controllers: [PolyController],
  providers: [PolyService],
})
export class PolyModule {}
