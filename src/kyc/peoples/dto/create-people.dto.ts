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
import { EducationDTO } from 'src/common/dto/education.dto';
import { EmploymentHistoryDTO } from 'src/common/dto/employment-history.dto';
import { FamilyAndRelativeDTO } from 'src/common/dto/family-and-relative.dto';
import { TrainingDTO } from 'src/common/dto/training.dto';
import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Profession } from 'src/common/enums/profession.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { CreateCustomerDTO } from 'src/kyc/customers/dto/create-customer.dto';

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
