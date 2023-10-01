import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Person } from 'src/kyc/peoples/schemas/person.schema';
import { Relationship } from '../enums/relationship.enum';

@Schema()
export class FamilyAndRelative {
  @Prop({
    require: true,
    type: String,
    enum: Object.values(Relationship),
  })
  relationship: Relationship;

  @Prop({ type: Types.ObjectId, required: true })
  familyAndRelative: string | Types.ObjectId | Person;
}

export const FamilyAndRelativeSchema =
  SchemaFactory.createForClass(FamilyAndRelative);
