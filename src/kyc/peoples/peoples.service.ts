import {
  BadRequestException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import {
  KYC_ATTACHMENT_MODEL,
  KycAttachmentDocument,
} from '../kyc-attachments/schemas/kyc-attachment.schema';
import { CreatePeopleDto } from './dto/create-people.dto';
import { UpdatePeopleDto } from './dto/update-people.dto';
import { PERSON_MODEL, PersonDocument } from './schemas/person.schema';

@Injectable()
export class PeoplesService {
  constructor(
    @InjectModel(PERSON_MODEL)
    private readonly personModel: Model<PersonDocument>,
    @InjectModel(KYC_ATTACHMENT_MODEL)
    private readonly kycAttachmentModel: Model<KycAttachmentDocument>,
    @InjectConnection() private readonly connection: mongoose.Connection,
  ) {}

  async create(createPeopleDto: CreatePeopleDto) {
    const createdPerson = new this.personModel(createPeopleDto);
    const errors = createdPerson.validateSync();

    if (errors) {
      const invalidFields = Object.keys(errors.errors);
      const validationErrors = invalidFields.map(
        (fieldName) => errors.errors[fieldName].message,
      );

      const result = {
        message: validationErrors,
        error: errors.name,
        statusCode: HttpStatus.BAD_REQUEST,
      };
      throw new BadRequestException(result);
    }

    // Unique NID Check

    // Unique BirthRegistrationNumber Check

    const person = await createdPerson.save();
    return person;
  }

  async findAll() {
    const resultPerPage = 5;
    const page = 1 - 1;
    const peoples = await this.personModel
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

    return peoples;
  }

  async findOne(id: string) {
    const existingPerson = await this.personModel.findById(id);
    if (!existingPerson) {
      throw new NotFoundException(`Person #${id} not found`);
    }
    return existingPerson;
  }

  async update(id: string, updatePeopleDto: UpdatePeopleDto) {
    const updatedPerson = await this.personModel.findByIdAndUpdate(
      id,
      updatePeopleDto,
      { new: true },
    );
    if (!updatedPerson) {
      throw new NotFoundException(`Person #${id} not found`);
    }
    return updatedPerson;

    // const transactionHandlerMethod = async (
    //   session: ClientSession,
    // ): Promise<any> => {
    //   const createdPerson = new this.personModel(updatePeopleDto);
    //   const person = await createdPerson.save({ session });

    //   return person;
    // };

    // const onError = (error: any): void => {
    //   throw error;
    // };

    // const person = await mongooseTransactionHandler<any>(
    //   transactionHandlerMethod,
    //   onError,
    //   this.connection,
    // );

    // return person;
  }

  async remove(id: string) {
    const deletedPerson = await this.personModel.findByIdAndDelete(id);
    if (!deletedPerson) {
      throw new NotFoundException(`Person #${id} not found`);
    }
    return deletedPerson;
  }
}
