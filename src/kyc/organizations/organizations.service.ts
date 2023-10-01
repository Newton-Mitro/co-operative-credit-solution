import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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
