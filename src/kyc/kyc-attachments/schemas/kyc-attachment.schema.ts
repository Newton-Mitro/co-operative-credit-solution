import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEnum } from 'class-validator';
import { AttachmentType } from 'src/common/enums/attachment-type.enum';
import { FileExtension } from 'src/common/enums/file-extension.emum';

@Schema()
export class KycAttachment {
  //   @Prop({ require: true })
  //   customerId: string;

  @Prop({ require: true, unique: true, type: String })
  @IsEnum(AttachmentType)
  attachmentType: AttachmentType;

  @Prop({ require: true, type: String })
  @IsEnum(FileExtension)
  fileExtension: FileExtension;

  @Prop({ require: true })
  fileContent: string;
}

export type KycAttachmentDocument = KycAttachment & Document;
export const KYC_ATTACHMENT_MODEL = KycAttachment.name;

export const KycAttachmentSchema = SchemaFactory.createForClass(KycAttachment);
