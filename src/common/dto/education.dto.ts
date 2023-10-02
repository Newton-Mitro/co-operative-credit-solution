import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { AddressType } from '../enums/address-type.enum';

export class EducationDTO {
  @IsString()
  @IsNotEmpty()
  educationLevel: AddressType;

  @IsString()
  @IsNotEmpty()
  educationDegree?: string;

  @IsString()
  @IsNotEmpty()
  instituteName: string;

  @IsString()
  @IsOptional()
  majorSubject?: string;

  @IsString()
  @IsNotEmpty()
  grade: string;
}
