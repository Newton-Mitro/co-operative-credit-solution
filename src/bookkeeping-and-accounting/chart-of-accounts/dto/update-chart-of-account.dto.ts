import { PartialType } from '@nestjs/mapped-types';
import { CreateChartOfAccountDto } from './create-chart-of-account.dto';

export class UpdateChartOfAccountDto extends PartialType(CreateChartOfAccountDto) {}
