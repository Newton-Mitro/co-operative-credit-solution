import { Module } from '@nestjs/common';
import { KycAttachmentsModule } from './kyc-attachments/kyc-attachments.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { PeoplesModule } from './peoples/peoples.module';

@Module({
  imports: [KycAttachmentsModule, OrganizationsModule, PeoplesModule],
})
export class KycModule {}
