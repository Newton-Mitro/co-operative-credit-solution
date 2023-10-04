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
  @Prop({ require: true, unique: true, minLength: 6, maxLength: 10 })
  identificationNumber: string;

  @Prop({ require: true })
  nameEn: string;

  @Prop()
  nameBn: string;

  @Prop({
    trim: true,
    unique: true,
    sparse: true,
    validate: {
      validator: (registeredEmail) => {
        return /[a-z0-9._%+-]+@[a-z0-9.-]+([.]{1})+[a-z]{2,}$/.test(
          registeredEmail,
        );
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  })
  registeredEmail: string;

  @Prop({
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
  alternateEmail: string;

  @Prop({
    trim: true,
    unique: true,
    sparse: true,
    validate: {
      validator: (registeredEmail) => {
        return /(^(([+]{1}|[0]{2})([0-9]{2}))?([0]{1})([-]{1})?([0-9]{4})([-]{1})?([0-9]{6}))$/.test(
          registeredEmail,
        );
      },
      message: (props) => `${props.value} is not a valid mobile number!`,
    },
  })
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

  @Prop({ type: Array(Types.ObjectId), ref: 'KycAttachment' })
  attachments: string[] | Types.ObjectId[] | KycAttachment[];
}

export type CustomerDocument = Customer & Document;
export const CUSTOMER_MODEL = Customer.name;

export const CustomerSchema = SchemaFactory.createForClass(Customer);
