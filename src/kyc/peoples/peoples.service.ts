import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import mongoose, { ClientSession, Model } from 'mongoose';
import { mongooseTransactionHandler } from 'src/infrastructure/mongoose/mongooseTransactionHandler';
import {
  KYC_ATTACHMENT_MODEL,
  KycAttachmentDocument,
} from '../kyc-attachments/schemas/kyc-attachment.schema';
import { CreatePeopleDto } from './dto/create-people.dto';
import { UpdatePeopleDto } from './dto/update-people.dto';
import { PERSON_MODEL, Person, PersonDocument } from './schemas/person.schema';

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

    const person = await createdPerson.save();
    return person;
  }

  findAll() {
    return this.personModel.find();
  }

  findOne(id: string) {
    return this.personModel.findById(id);
  }

  async update(id: string, updatePeopleDto: UpdatePeopleDto) {
    const transactionHandlerMethod = async (
      session: ClientSession,
    ): Promise<any> => {
      const personModel = new Person(); // map CreatePeopleDto to Person Model
      const createdPerson = new this.personModel(updatePeopleDto);
      const person = await createdPerson.save({ session });

      return person;
    };

    const onError = (error: any): void => {
      throw error;
    };

    const person = await mongooseTransactionHandler<any>(
      transactionHandlerMethod,
      onError,
      this.connection,
    );

    return person;
  }

  remove(id: string) {
    return `This action removes a #${id} people`;
  }
}
