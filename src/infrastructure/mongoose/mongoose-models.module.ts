import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  CUSTOMER_MODEL,
  CustomerSchema,
} from '../../kyc/customers/schemas/customer.schema';
import {
  KYC_ATTACHMENT_MODEL,
  KycAttachmentSchema,
} from '../../kyc/kyc-attachments/schemas/kyc-attachment.schema';
import {
  ORGANIZATION_MODEL,
  OrganizationSchema,
} from '../../kyc/organizations/schemas/organization.schema';
import {
  PERSON_MODEL,
  PersonSchema,
} from '../../kyc/peoples/schemas/person.schema';

const MODELS = [
  {
    name: CUSTOMER_MODEL,
    schema: CustomerSchema,
    discriminators: [
      { name: PERSON_MODEL, schema: PersonSchema },
      { name: ORGANIZATION_MODEL, schema: OrganizationSchema },
    ],
  },
  {
    name: KYC_ATTACHMENT_MODEL,
    schema: KycAttachmentSchema,
  },
];

@Global()
@Module({
  imports: [MongooseModule.forFeature(MODELS)],
  exports: [MongooseModule],
})
export class MongooseModelsModule {}
