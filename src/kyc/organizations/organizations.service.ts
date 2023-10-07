import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findAll() {
    const resultPerPage = 5;
    const page = 1 - 1;
    const organizations = await this.organizationModel
      .find({})
      .select([
        '_id',
        'identificationNumber',
        'nameEn',
        'nameBn',
        'registeredEmail',
        'alternateEmail',
        'registeredMobile',
        'alternateContactNumber',
        'emergencyContactNumber',
        'dateOfBirth',
        'nid',
        'birthRegistrationNumber',
        'bloodGroup',
        'gender',
        'religion',
        'profession',
        'maritalStatus',
        'customerType',
      ])
      .sort({ nameEn: 'asc' })
      .limit(resultPerPage)
      .skip(resultPerPage * page);

    return organizations;
  }

  async findOne(id: string) {
    const existingOrganization = await this.organizationModel.findById(id);
    if (!existingOrganization) {
      throw new NotFoundException(`Organization #${id} not found`);
    }
    return existingOrganization;
  }

  async update(id: string, updateOrganizationDto: UpdateOrganizationDto) {
    const updatedOrganization = await this.organizationModel.findByIdAndUpdate(
      id,
      updateOrganizationDto,
      { new: true },
    );
    if (!updatedOrganization) {
      throw new NotFoundException(`Organization #${id} not found`);
    }
    return updatedOrganization;
  }

  async remove(id: string) {
    const removedOrganization = await this.organizationModel.findById(id);
    if (!removedOrganization) {
      throw new NotFoundException(`Organization #${id} not found`);
    }
    return removedOrganization;
  }
}
