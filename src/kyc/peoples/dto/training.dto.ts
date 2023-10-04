import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

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

  @IsDateString()
  @IsNotEmpty()
  startDate: Date;

  @IsDateString()
  @IsNotEmpty()
  endDate: Date;
}
