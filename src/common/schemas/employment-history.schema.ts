import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class EmploymentHistory {
  @Prop({ require: true })
  organizationName: string;

  @Prop()
  position: string;

  @Prop({ require: true })
  address: string;

  @Prop()
  supervisorName: string;

  @Prop()
  supervisorDesignation: string;

  @Prop()
  supervisorPhone: string;

  @Prop()
  jobResponsibilities: string;

  @Prop()
  salary: string;

  @Prop()
  startDate: string;

  @Prop()
  endDate: string;

  @Prop()
  tillNow: string;
}

export const EmploymentHistorySchema =
  SchemaFactory.createForClass(EmploymentHistory);
