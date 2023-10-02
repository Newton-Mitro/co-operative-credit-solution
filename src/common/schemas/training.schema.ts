import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Training {
  @Prop({ require: true })
  courseTitle: string;

  @Prop()
  instituteName: string;

  @Prop({ require: true })
  courseContent: string;

  @Prop()
  result: string;

  @Prop()
  duration: string;

  @Prop()
  startDate: string;

  @Prop()
  endDate: string;
}

export const TrainingSchema = SchemaFactory.createForClass(Training);
