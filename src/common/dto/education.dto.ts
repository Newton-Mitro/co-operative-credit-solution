import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class EducationDTO {
  @IsString()
  @IsNotEmpty()
  educationLevel: string;

  @IsString()
  @IsNotEmpty()
  educationDegree: string;

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
