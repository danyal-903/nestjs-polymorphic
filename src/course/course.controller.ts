import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ActivityDto } from 'src/activity/dto/activity.dto';
import { CourseService } from './course.service';
import { CourseDto } from './dto/course.dto';

@ApiTags('Course')
@Controller('course')
export class CourseController {
  constructor(private readonly service: CourseService) {}

  @Get()
  async find() {
    return this.service.find();
  }

  @Get(':id')
  async findOneById(@Param('id') id: string) {
    return this.service.findOneById(id);
  }

  @Post()
  async create(@Body() course: CourseDto) {
    return this.service.create(course);
  }

  @Put(':id')
  async createActivity(@Param('id') id: string, @Body() activity: ActivityDto) {
    return this.service.createActivity(id, activity);
  }
}
