import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ActivityService } from 'src/activity/activity.service';
import { ActivityDto } from 'src/activity/dto/activity.dto';
import { CourseDto } from './dto/course.dto';
import {
  ActivityLink,
  ActivityLinkDocument,
} from './entities/activity-link.schema';
import { Course, CourseDocument } from './entities/course.schema';

@Injectable()
export class CourseService {
  constructor(
    @InjectModel(Course.name) private courseModel: Model<CourseDocument>,
    @InjectModel(ActivityLink.name)
    private activityLinkModel: Model<ActivityLinkDocument>,
    private readonly activityService: ActivityService,
  ) {}

  async find() {
    return this.courseModel.find().populate('activityLink').exec();
  }

  async findOneById(id: string) {
    return this.courseModel.findOne({ _id: id }).populate('activityLink').exec();
  }

  async create(course: CourseDto) {
    const c = this.courseModel.create(course);
    return (await c).save();
  }

  async createActivity(id: string, activity: ActivityDto) {
    // this.courseModel.
    const course = await this.courseModel.findById(id).populate('activities','activityLink').exec();
    const act = await this.activityService.create(activity);
    const activitylink = await this.activityLinkModel.create({
      activityId: act._id,
      entityId: course._id,
      entityType: Course.name,
      courseId: course._id,
    });

    // course.activities.push(act);
    const cl =await activitylink.save();
    // course.activityLink.push(cl);
    course.save();
    return act;
  }
}
