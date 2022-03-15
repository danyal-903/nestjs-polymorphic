import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ActivityDocument = Activity & Document;

@Schema({ timestamps: true })
export class Activity {
  @Prop()
  info: string;
}

export const ActivitySchema = SchemaFactory.createForClass(Activity);
