import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { KycAttachment } from 'src/kyc/kyc-attachments/schemas/kyc-attachment.schema';
import { Address, AddressSchema } from './address.schema';

@Schema({
  timestamps: true,
  versionKey: false,
  discriminatorKey: 'customerType',
})
export class Customer {
  @Prop({
    require: true,
    unique: true,
    minLength: 6,
    maxLength: 10,
    trim: true,
  })
  identificationNumber: string;

  @Prop({ require: true, trim: true })
  nameEn: string;

  @Prop()
  nameBn: string;

  @Prop({
    trim: true,
    validate: {
      validator: (registeredEmail) => {
        if (registeredEmail !== '') {
          return /[a-z0-9._%+-]+@[a-z0-9.-]+([.]{1})+[a-z]{2,}$/.test(
            registeredEmail,
          );
        } else {
          return true;
        }
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  })
  registeredEmail: string;

  @Prop({
    validate: {
      validator: (alternateEmail) => {
        if (alternateEmail) {
          return /[a-z0-9._%+-]+@[a-z0-9.-]+([.]{1})+[a-z]{2,}$/.test(
            alternateEmail,
          );
        } else {
          return true;
        }
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  })
  alternateEmail: string;

  @Prop({
    trim: true,
    validate: {
      validator: (registeredMobile) => {
        if (registeredMobile) {
          return /(^(([+]{1}|[0]{2})([0-9]{2}))?([0]{1})([-]{1})?([0-9]{4})([-]{1})?([0-9]{6}))$/.test(
            registeredMobile,
          );
        } else {
          return true;
        }
      },
      message: (props) => `${props.value} is not a valid mobile number!`,
    },
  })
  registeredMobile: string;

  @Prop({
    validate: {
      validator: (alternateContactNumber) => {
        if (alternateContactNumber) {
          return /(^(([+]{1}|[0]{2})([0-9]{2}))?([0]{1})([-]{1})?([0-9]{4})([-]{1})?([0-9]{6}))$/.test(
            alternateContactNumber,
          );
        } else {
          return true;
        }
      },
      message: (props) => `${props.value} is not a valid mobile number!`,
    },
  })
  alternateContactNumber: string;

  @Prop()
  emergencyContactNumber: string;

  @Prop({
    type: Array(AddressSchema),
    required: true,
  })
  addresses: Address[];

  @Prop({ type: Array(Types.ObjectId), ref: 'KycAttachment' })
  attachments: string[] | Types.ObjectId[] | KycAttachment[];
}

export type CustomerDocument = Customer & Document;
export const CUSTOMER_MODEL = Customer.name;

export const CustomerSchema = SchemaFactory.createForClass(Customer);
