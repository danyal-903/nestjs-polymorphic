import { IsOptional, IsString } from 'class-validator';

export class ActivityDto {
  @IsOptional()
  @IsString()
  info: string;
}
