import { Optional } from '@nestjs/common';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { AddressDTO } from 'src/common/dto/address.dto';

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

  @IsString({ each: true })
  @IsOptional()
  attachments: string[];
}
