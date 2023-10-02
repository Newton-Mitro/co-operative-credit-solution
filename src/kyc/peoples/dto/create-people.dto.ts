import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Profession } from 'src/common/enums/profession.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { FamilyAndRelative } from 'src/common/schemas/family-and-relative.schema';
import { CreateCustomerDTO } from 'src/kyc/customers/dto/create-customer.dto';

export class CreatePeopleDto extends CreateCustomerDTO {
  @IsString()
  @IsNotEmpty()
  dateOfBirth: string;

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
  religion?: string;

  @IsString()
  @IsOptional()
  @IsEnum(Profession)
  profession?: string;

  @IsString()
  @IsEnum(MaritalStatus)
  maritalStatus?: string;

  @IsOptional()
  alive?: boolean;

  @IsString()
  @IsOptional()
  photo?: string;

  @IsOptional()
  familyAndRelatives?: FamilyAndRelative[];
}
