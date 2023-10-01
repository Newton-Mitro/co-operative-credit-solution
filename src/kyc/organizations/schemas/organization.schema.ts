import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Address, AddressSchema } from 'src/common/schemas/address.schema';
import { Customer } from '../../customers/schemas/customer.schema';

@Schema()
export class Organization extends Customer {
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

export type OrganizationDocument = Organization & Document;
export const ORGANIZATION_MODEL = Organization.name;

export const OrganizationSchema = SchemaFactory.createForClass(Organization);
