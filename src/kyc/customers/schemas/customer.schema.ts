import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Address, AddressSchema } from 'src/common/schemas/address.schema';

@Schema({
  timestamps: true,
  versionKey: false,
  discriminatorKey: 'customerType',
})
export class Customer {
  @Prop({ require: true, unique: true })
  identificationNumber: string;

  @Prop({ require: true })
  nameEn: string;

  @Prop()
  nameBn: string;

  @Prop({ trim: true, unique: true, sparse: true })
  registeredEmail: string;

  @Prop()
  alternateEmail: string;

  @Prop({ trim: true, unique: true, sparse: true })
  registeredMobile: string;

  @Prop()
  alternateContactNumber: string;

  @Prop()
  emergencyContactNumber: string;

  @Prop({
    type: Array(AddressSchema),
    required: true,
  })
  addresses: Address[];
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
