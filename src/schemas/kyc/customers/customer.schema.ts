import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Address, AddressSchema } from 'src/schemas/common/address.schema';

@Schema({
  timestamps: true,
  versionKey: false,
})
export class Customer {
  @Prop({ require: true, unique: true })
  identificationNumber: string;

  @Prop({ require: true })
  nameEn: string;

  @Prop()
  nameBn: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  alternateEmail: string;

  @Prop({ unique: true })
  mobileNumber: string;

  @Prop()
  alternateContactNumber: string;

  @Prop()
  emergencyContactNumber: string;

  @Prop({
    type: AddressSchema,
    required: true,
  })
  address: Address[];
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
