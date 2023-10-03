import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ContactPersonDTO {
  @IsString()
  @IsOptional()
  contactPerson?: string;

  @IsString()
  @IsNotEmpty()
  contactPersonName: string;

  @IsString()
  @IsNotEmpty()
  contactNumber: string;

  @IsString()
  @IsOptional()
  emergencyContactNumber: string;

  @IsString()
  @IsOptional()
  email: string;
}
