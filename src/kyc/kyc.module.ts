import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { CustomersService } from './customers/customers.service';
import { KycAttachmentsModule } from './kyc-attachments/kyc-attachments.module';
import { KycAttachmentsService } from './kyc-attachments/kyc-attachments.service';
import { OrganizationsModule } from './organizations/organizations.module';
import { OrganizationsService } from './organizations/organizations.service';
import { PeoplesModule } from './peoples/peoples.module';
import { PeoplesService } from './peoples/peoples.service';

@Module({
  imports: [
    KycAttachmentsModule,
    OrganizationsModule,
    PeoplesModule,
    CustomersModule,
  ],
  providers: [
    PeoplesService,
    OrganizationsService,
    KycAttachmentsService,
    CustomersService,
  ],
})
export class KycModule {}
