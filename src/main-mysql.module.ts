import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { REPOS } from './consts/repos.const';

const TypeOrm = [TypeOrmModule.forFeature(REPOS)];
@Module({
  imports: [...TypeOrm],
  exports: [...TypeOrm],
})
export class MainMysqlModule {}
