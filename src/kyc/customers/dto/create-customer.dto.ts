import { Optional } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { AddressDTO } from 'src/common/dto/address.dto';
import { CreateKycAttachmentDto } from 'src/kyc/kyc-attachments/dto/create-kyc-attachment.dto';

export class CreateCustomerDTO {
  @IsString()
  @IsNotEmpty()
  identificationNumber: string;

  @IsString()
  @IsNotEmpty()
  nameEn: string;

  @IsString()
  @IsNotEmpty()
  nameBn: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  registeredEmail: string;

  @IsString()
  @Optional()
  alternateEmail: string;

  @IsString()
  @IsNotEmpty()
  registeredMobile: string;

  @IsString()
  alternateContactNumber: string;

  @IsString()
  emergencyContactNumber: string;

  @Type(() => AddressDTO)
  @ValidateNested({ each: true })
  addresses: AddressDTO[];

  @Type(() => CreateKycAttachmentDto)
  @ValidateNested({ each: true })
  attachments: CreateKycAttachmentDto[];
}
