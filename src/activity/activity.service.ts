import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ActivityDto } from './dto/activity.dto';
import { Activity, ActivityDocument } from './entities/activity.schema';
@Injectable()
export class ActivityService {
  constructor(
    @InjectModel(Activity.name) private activityModel: Model<ActivityDocument>,
  ) {}

  async find() {
    return this.activityModel.find().exec();
  }

  async findOneById(id: string) {
    return this.activityModel.findOne({ _id: id }).exec();
  }

  async create(activity: ActivityDto) {
    const act = await this.activityModel.create(activity);
    return act.save();
  }
}
