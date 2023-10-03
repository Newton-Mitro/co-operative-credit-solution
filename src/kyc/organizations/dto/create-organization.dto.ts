import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { BankAccountDTO } from 'src/common/dto/bank-account.dto';
import { ContactPersonDTO } from 'src/common/dto/contact-person.dto';
import { CreateCustomerDTO } from 'src/kyc/customers/dto/create-customer.dto';

export class CreateOrganizationDto extends CreateCustomerDTO {
  @IsString()
  @IsOptional()
  parentOrganization?: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsString()
  @IsOptional()
  faxNumber: string;

  @IsString()
  @IsOptional()
  website: string;

  @IsBoolean()
  @IsOptional()
  bankrupt: boolean;

  @IsArray()
  branches: string[];

  @Type(() => ContactPersonDTO)
  @IsArray()
  @ValidateNested({ each: true })
  contactPeoples: ContactPersonDTO[];

  @Type(() => BankAccountDTO)
  @IsArray()
  @ValidateNested({ each: true })
  bankAccounts: BankAccountDTO[];
}
