import { Optional } from '@nestjs/common';
import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsEmail,
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
  @Optional()
  nameBn?: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  registeredEmail: string;

  @IsString()
  alternateEmail?: string;

  @IsString()
  @IsNotEmpty()
  registeredMobile: string;

  @IsString()
  @Optional()
  alternateContactNumber?: string;

  @IsString()
  @Optional()
  emergencyContactNumber?: string;

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
