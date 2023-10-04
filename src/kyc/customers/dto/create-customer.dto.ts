import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateKycAttachmentDto } from 'src/kyc/kyc-attachments/dto/create-kyc-attachment.dto';
import { AddressDTO } from './address.dto';

export class CreateCustomerDTO {
  @IsString()
  @IsNotEmpty()
  identificationNumber: string;

  @IsString()
  @IsNotEmpty()
  nameEn: string;

  @IsString()
  nameBn: string;

  @IsString()
  registeredEmail: string;

  @IsString()
  alternateEmail: string;

  @IsString()
  registeredMobile: string;

  @IsString()
  alternateContactNumber: string;

  @IsString()
  emergencyContactNumber: string;

  @Type(() => AddressDTO)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  addresses: AddressDTO[];

  @Type(() => CreateKycAttachmentDto)
  @IsArray()
  @ValidateNested({ each: true })
  attachments: CreateKycAttachmentDto[];
}
