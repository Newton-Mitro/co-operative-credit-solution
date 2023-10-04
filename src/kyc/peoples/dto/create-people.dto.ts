import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateCustomerDTO } from 'src/kyc/customers/dto/create-customer.dto';
import { BloodGroup } from '../enums/blood-group.enum';
import { Gender } from '../enums/gender.enum';
import { MaritalStatus } from '../enums/marital-status.enum';
import { Profession } from '../enums/profession.enum';
import { Religion } from '../enums/religion.enum';
import { EducationDTO } from './education.dto';
import { EmploymentHistoryDTO } from './employment-history.dto';
import { FamilyAndRelativeDTO } from './family-and-relative.dto';
import { TrainingDTO } from './training.dto';

export class CreatePeopleDto extends CreateCustomerDTO {
  @IsDateString()
  @IsNotEmpty()
  dateOfBirth: Date;

  @IsString()
  @IsOptional()
  nid?: string;

  @IsString({ each: true })
  @IsOptional()
  birthRegistrationNumber?: string;

  @IsString()
  @IsEnum(BloodGroup)
  bloodGroup?: string;

  @IsString()
  @IsEnum(Gender)
  gender?: string;

  @IsString()
  @IsEnum(Religion)
  religion: string;

  @IsString()
  @IsOptional()
  @IsEnum(Profession)
  profession?: string;

  @IsString()
  @IsEnum(MaritalStatus)
  maritalStatus: string;

  @IsBoolean()
  @IsOptional()
  alive?: boolean;

  @IsString()
  @IsOptional()
  photo?: string;

  @Type(() => FamilyAndRelativeDTO)
  @IsArray()
  @ValidateNested({ each: true })
  familyAndRelatives: FamilyAndRelativeDTO[];

  @Type(() => EducationDTO)
  @IsArray()
  @ValidateNested({ each: true })
  educations: EducationDTO[];

  @Type(() => TrainingDTO)
  @IsArray()
  @ValidateNested({ each: true })
  trainings: TrainingDTO[];

  @Type(() => EmploymentHistoryDTO)
  @IsArray()
  @ValidateNested({ each: true })
  employmentHistories: EmploymentHistoryDTO[];
}
