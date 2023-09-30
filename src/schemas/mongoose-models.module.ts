import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema } from './kyc/customers/customer.schema';
import { OrganizationSchema } from './kyc/organizations/organization.schema';
import { PersonSchema } from './kyc/peoples/person.schema';

const MODELS = [
  {
    name: 'Customer',
    schema: CustomerSchema,
    discriminators: [
      { name: 'Person', schema: PersonSchema },
      { name: 'Organization', schema: OrganizationSchema },
    ],
  },
];

@Global()
@Module({
  imports: [MongooseModule.forFeature(MODELS)],
  exports: [MongooseModule],
})
export class MongooseModelsModule {}
