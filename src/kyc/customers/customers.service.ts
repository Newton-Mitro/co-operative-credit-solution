import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import {
  KYC_ATTACHMENT_MODEL,
  KycAttachmentDocument,
} from '../kyc-attachments/schemas/kyc-attachment.schema';
import { FindAllQueryDto } from './dto/find-all-query.dto';
import { CUSTOMER_MODEL, CustomerDocument } from './schemas/customer.schema';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(CUSTOMER_MODEL)
    private readonly customerModel: Model<CustomerDocument>,
    @InjectModel(KYC_ATTACHMENT_MODEL)
    private readonly kycAttachmentModel: Model<KycAttachmentDocument>,
    @InjectConnection() private readonly connection: mongoose.Connection,
  ) {}

  async search(searchText: string, findAllQueryDto: FindAllQueryDto) {
    // {
    //   $and: [
    //     { $or: [{ nameEn: regex }, { description: regex }] },
    //     { category: value.category },
    //     { city: value.city },
    //   ],
    // }

    const { order_by, limit, page, sort_by } = findAllQueryDto;
    const regex = new RegExp(searchText, 'i');
    const customers = await this.customerModel
      .find({
        $or: [
          { nameEn: regex },
          { identificationNumber: regex },
          { nid: regex },
          { birthRegistrationNumber: regex },
        ],
      })
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
      .sort({ [sort_by]: order_by })
      .limit(limit)
      .skip(limit * (page - 1));

    return customers;
  }

  async findAll(findAllQueryDto: FindAllQueryDto) {
    const { order_by, limit, page, sort_by } = findAllQueryDto;

    const customers = await this.customerModel
      .find()
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
      .sort({ [sort_by]: order_by })
      .limit(limit)
      .skip(limit * (page - 1));
    return customers;
  }

  async findOne(id: string) {
    const existingCustomer = await this.customerModel.findById(id);
    if (!existingCustomer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    return existingCustomer;
  }

  async remove(id: string) {
    const deletedCustomer = await this.customerModel.findByIdAndDelete(id);
    if (!deletedCustomer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    return deletedCustomer;
  }
}
