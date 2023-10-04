import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Country } from 'src/kyc/peoples/enums/country.enum';
import { AddressType } from '../../peoples/enums/address-type.enum';

export class AddressDTO {
  @IsEnum(AddressType)
  @IsNotEmpty()
  addressType: AddressType;

  @IsString()
  @IsNotEmpty()
  addressLineOne: string;

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
