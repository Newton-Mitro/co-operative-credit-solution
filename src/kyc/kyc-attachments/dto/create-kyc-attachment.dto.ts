import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { BloodGroup } from 'src/kyc/peoples/enums/blood-group.enum';

export class CreateKycAttachmentDto {
  @IsString()
  @IsNotEmpty()
  customerId: string;

  @IsString()
  attachmentType: string;

  @IsString({ each: true })
  @IsEnum(BloodGroup)
  fileExtension: string;

  @IsString()
  fileContent: string;
}
