import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { AddressType } from '../enums/address-type.enum';
import { Country } from '../enums/country.enum';

export class AddressDTO {
  @IsEnum(AddressType)
  @IsNotEmpty()
  addressType: AddressType;

  @IsString()
  @IsNotEmpty()
  addressLineOne?: string;

  @IsString()
  @IsOptional()
  addressLineTwo?: string;

  @IsString()
  @IsOptional()
  city?: string;

  @IsEnum(Country)
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsOptional()
  state?: string;

  @IsString()
  @IsOptional()
  division: string;

  @IsString()
  @IsOptional()
  district: string;

  @IsString()
  @IsOptional()
  subDistrict: string;

  @IsString()
  @IsOptional()
  zipCode?: string;
}
