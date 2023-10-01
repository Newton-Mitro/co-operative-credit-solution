import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AddressType } from 'src/common/enums/address-type.enum';

@Schema()
export class Address {
  @Prop({
    require: true,
    type: String,
    enum: Object.values(AddressType),
    default: AddressType.Permanent_Address,
  })
  addressType: AddressType;

  @Prop({ require: true })
  addressLineOne: string;

  @Prop()
  addressLineTwo: string;

  @Prop({ require: true })
  country: string;

  @Prop()
  city: string;

  @Prop()
  division: string;

  @Prop()
  district: string;

  @Prop()
  subDistrict: string;

  @Prop()
  zipCode: string;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
