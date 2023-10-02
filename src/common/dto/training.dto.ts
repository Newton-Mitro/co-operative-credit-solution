import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class TrainingDTO {
  @IsString()
  @IsNotEmpty()
  courseTitle: string;

  @IsString()
  @IsNotEmpty()
  instituteName: string;

  @IsString()
  @IsOptional()
  courseContent: string;

  @IsString()
  @IsOptional()
  result?: string;

  @IsString()
  @IsNotEmpty()
  duration: string;

  @IsDate()
  @IsNotEmpty()
  startDate: Date;

  @IsDate()
  @IsNotEmpty()
  endDate: Date;
}
