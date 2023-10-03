import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEnum } from 'class-validator';
import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Profession } from 'src/common/enums/profession.enum';
import { Religion } from 'src/common/enums/religion.enum';
import {
  Education,
  EducationSchema,
} from 'src/common/schemas/education.schema';
import {
  EmploymentHistory,
  EmploymentHistorySchema,
} from 'src/common/schemas/employment-history.schema';
import {
  FamilyAndRelative,
  FamilyAndRelativeSchema,
} from 'src/common/schemas/family-and-relative.schema';
import { Training, TrainingSchema } from 'src/common/schemas/training.schema';
import { Customer } from '../../customers/schemas/customer.schema';

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

  @IsEnum(BloodGroup)
  @Prop({ type: String })
  bloodGroup: BloodGroup;

  @IsEnum(Gender)
  @Prop({ require: true, type: String })
  gender: Gender;

  @IsEnum(Religion)
  @Prop({ require: true, type: String })
  religion: Religion;

  @IsEnum(Profession)
  @Prop({ type: String, default: Profession.Rather_Not_Say })
  profession: Profession;

  @IsEnum(MaritalStatus)
  @Prop({ require: true, type: String })
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
