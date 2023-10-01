import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema } from '../../kyc/customers/schemas/customer.schema';
import { OrganizationSchema } from '../../kyc/organizations/schemas/organization.schema';
import { PersonSchema } from '../../kyc/peoples/schemas/person.schema';

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
