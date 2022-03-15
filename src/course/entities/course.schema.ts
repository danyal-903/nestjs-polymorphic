import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Activity } from 'src/activity/entities/activity.schema';
import { ActivityLink } from './activity-link.schema';

export type CourseDocument = Course & Document;

@Schema({ timestamps: true })
export class Course {
  @Prop()
  title: string;

  @Prop({ type: Types.ObjectId, ref: Activity.name })
  activities: [Activity];

  @Prop({ type: Types.ObjectId, ref: 'ActivityLink' })
  activityLink: [ActivityLink]; 
}

export const CourseSchema = SchemaFactory.createForClass(Course);
