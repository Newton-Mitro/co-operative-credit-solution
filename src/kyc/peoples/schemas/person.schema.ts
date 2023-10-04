import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Customer } from '../../customers/schemas/customer.schema';
import { BloodGroup } from '../enums/blood-group.enum';
import { Gender } from '../enums/gender.enum';
import { MaritalStatus } from '../enums/marital-status.enum';
import { Profession } from '../enums/profession.enum';
import { Religion } from '../enums/religion.enum';
import { Education, EducationSchema } from './education.schema';
import {
  EmploymentHistory,
  EmploymentHistorySchema,
} from './employment-history.schema';
import {
  FamilyAndRelative,
  FamilyAndRelativeSchema,
} from './family-and-relative.schema';
import { Training, TrainingSchema } from './training.schema';

@Schema()
export class Person extends Customer {
  constructor() {
    super();
  }
  @Prop({ require: true })
  dateOfBirth: Date;

  @Prop({ trim: true, unique: true, sparse: true })
  nid: string;

  @Prop({ trim: true, unique: true, sparse: true })
  birthRegistrationNumber: string;

  @Prop({ type: String, enum: Object.values(BloodGroup) })
  bloodGroup: BloodGroup;

  @Prop({ require: true, type: String, enum: Object.values(Gender) })
  gender: Gender;

  @Prop({ require: true, type: String, enum: Object.values(Religion) })
  religion: Religion;

  @Prop({
    type: String,
    default: Profession.Rather_Not_Say,
    enum: Object.values(Profession),
  })
  profession: Profession;

  @Prop({ require: true, type: String, enum: Object.values(MaritalStatus) })
  maritalStatus: MaritalStatus;

  @Prop({ default: true })
  alive: boolean;

  @Prop()
  photo: string;

  @Prop({ type: Array(FamilyAndRelativeSchema) })
  familyAndRelatives: FamilyAndRelative[];

  @Prop({ type: Array(EducationSchema) })
  educations: Education[];

  @Prop({ type: Array(TrainingSchema) })
  trainings: Training[];

  @Prop({ type: Array(EmploymentHistorySchema) })
  employmentHistories: EmploymentHistory[];
}

export type PersonDocument = Person & Document;
export const PERSON_MODEL = Person.name;

export const PersonSchema = SchemaFactory.createForClass(Person);
