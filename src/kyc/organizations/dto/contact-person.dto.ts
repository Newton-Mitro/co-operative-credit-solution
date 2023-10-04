import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ContactPersonDTO {
  @IsOptional()
  contactPerson?: string;

  @IsString()
  @IsNotEmpty()
  contactPersonName: string;

  @IsString()
  @IsNotEmpty()
  contactNumber: string;

  @IsString()
  emergencyContactNumber: string;

  @IsString()
  email: string;
}
