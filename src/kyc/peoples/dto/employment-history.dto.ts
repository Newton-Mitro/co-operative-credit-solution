import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class EmploymentHistoryDTO {
  @IsString()
  @IsNotEmpty()
  organizationName: string;

  @IsString()
  @IsNotEmpty()
  position: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  supervisorName: string;

  @IsString()
  @IsNotEmpty()
  supervisorDesignation: string;

  @IsString()
  @IsNotEmpty()
  supervisorPhone: string;

  @IsString()
  @IsNotEmpty()
  jobResponsibilities: string;

  @IsNumber()
  @IsOptional()
  salary?: number;

  @IsDateString()
  @IsNotEmpty()
  startDate: Date;

  @IsDateString()
  @IsNotEmpty()
  endDate: Date;

  @IsBoolean()
  @IsNotEmpty()
  tillNow: boolean;
}
