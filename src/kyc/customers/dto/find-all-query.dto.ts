import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { SortBy } from 'src/common/enums/sort-by.enum';

export class FindAllQueryDto {
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  page: number = 1;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  limit: number = 2;

  @IsString()
  @IsOptional()
  sort_by: string;

  @IsOptional()
  @IsEnum(SortBy)
  order_by: SortBy = SortBy.ASC;
}
