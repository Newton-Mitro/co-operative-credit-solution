import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import {
  KYC_ATTACHMENT_MODEL,
  KycAttachmentDocument,
} from '../kyc-attachments/schemas/kyc-attachment.schema';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import {
  ORGANIZATION_MODEL,
  OrganizationDocument,
} from './schemas/organization.schema';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectModel(ORGANIZATION_MODEL)
    private readonly organizationModel: Model<OrganizationDocument>,
    @InjectModel(KYC_ATTACHMENT_MODEL)
    private readonly kycAttachmentModel: Model<KycAttachmentDocument>,
    @InjectConnection() private readonly connection: mongoose.Connection,
  ) {}

  async create(createOrganizationDto: CreateOrganizationDto) {
    const createdOrganization = await this.organizationModel.create(
      createOrganizationDto,
    );

    return createdOrganization;
  }

  findAll() {
    return `This action returns all organizations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} organization`;
  }

  update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    return `This action updates a #${id} organization`;
  }

  remove(id: number) {
    return `This action removes a #${id} organization`;
  }
}
