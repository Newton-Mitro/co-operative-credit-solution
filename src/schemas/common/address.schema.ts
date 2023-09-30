import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AddressType } from 'src/common/enums/address-type.enum';

@Schema()
export class Address {
  @Prop({
    require: true,
    type: String,
    enum: Object.keys(AddressType),
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
  postalCode: string;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
