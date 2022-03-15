import { IsOptional, IsString } from 'class-validator';

export class CourseDto {
  @IsOptional()
  @IsString()
  title: string;
}
