import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ActivityModule } from 'src/activity/activity.module';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import {
  ActivityLink,
  ActivityLinkSchema,
} from './entities/activity-link.schema';
import { Course, CourseSchema } from './entities/course.schema';

@Module({
  imports: [
    ActivityModule,
    MongooseModule.forFeature([
      {
        name: Course.name,
        schema: CourseSchema,
        discriminators: [
          { name: ActivityLink.name, schema: ActivityLinkSchema },
        ],
      },
      {
        name: ActivityLink.name,
        schema: ActivityLinkSchema,
      },
    ]),
  ],
  controllers: [CourseController],
  providers: [CourseService],
  exports: [CourseService],
})
export class CourseModule {}
