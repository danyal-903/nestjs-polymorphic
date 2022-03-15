import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Activity } from 'src/activity/entities/activity.schema';
import { Course } from './course.schema';

export type ActivityLinkDocument = ActivityLink & Document;

@Schema({ discriminatorKey: 'entityType', timestamps: true })
export class ActivityLink {
  @Prop({
    type: Types.ObjectId,
    required: true,
  })
  entityId: string;

  @Prop({
    type: String,
    required: true,
    enum: [Course.name],
  })
  entityType: string;

  @Prop({
    type: Types.ObjectId,
    required: true,
    ref: Activity.name,
  })
  activityId: string;

  @Prop({ type: Types.ObjectId, ref: Course.name })
  course?: string;
}

export const ActivityLinkSchema = SchemaFactory.createForClass(ActivityLink);
