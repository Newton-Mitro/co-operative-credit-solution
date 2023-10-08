import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsOptional,
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
  @IsOptional()
  nameBn: string;

  @IsString()
  registeredEmail: string;

  @IsString()
  @IsOptional()
  alternateEmail: string;

  @IsString()
  registeredMobile: string;

  @IsString()
  @IsOptional()
  alternateContactNumber: string;

  @IsString()
  @IsOptional()
  emergencyContactNumber: string;

  @Type(() => AddressDTO)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  addresses: AddressDTO[];

  @Type(() => CreateKycAttachmentDto)
  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  attachments: CreateKycAttachmentDto[];
}
