import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class ContactPerson {
  @Prop({ type: Types.ObjectId })
  contactPerson: string;

  @Prop({ require: true })
  contactPersonName: string;

  @Prop({ require: true })
  contactNumber: string;

  @Prop()
  emergencyContactNumber: string;

  @Prop()
  email: string;
}

export const ContactPersonSchema = SchemaFactory.createForClass(ContactPerson);
