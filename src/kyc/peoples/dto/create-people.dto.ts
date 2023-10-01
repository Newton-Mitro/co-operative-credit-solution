import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
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
  bloodGroup?: string;

  @IsString()
  gender?: string;

  @IsString()
  religion?: string;

  @IsString()
  @IsOptional()
  profession?: string;

  @IsString()
  maritalStatus?: string;

  @IsOptional()
  alive?: boolean;

  @IsString()
  @IsOptional()
  photo?: string;

  @IsOptional()
  familyAndRelatives?: FamilyAndRelative[];
}
