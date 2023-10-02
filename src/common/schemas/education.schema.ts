import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Education {
  @Prop({ require: true })
  educationLevel: string;

  @Prop()
  educationDegree: string;

  @Prop({ require: true })
  instituteName: string;

  @Prop()
  majorSubject: string;

  @Prop()
  grade: string;
}

export const EducationSchema = SchemaFactory.createForClass(Education);
