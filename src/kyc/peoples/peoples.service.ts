import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import mongoose, { ClientSession, Model } from 'mongoose';
import { mongooseTransactionHandler } from 'src/infrastructure/mongoose/mongooseTransactionHandler';
import { KycAttachmentDocument } from '../kyc-attachments/schemas/kyc-attachment.schema';
import { CreatePeopleDto } from './dto/create-people.dto';
import { UpdatePeopleDto } from './dto/update-people.dto';
import { PERSON_MODEL, Person, PersonDocument } from './schemas/person.schema';

@Injectable()
export class PeoplesService {
  constructor(
    @InjectModel(PERSON_MODEL)
    private readonly personModel: Model<PersonDocument>,
    @InjectModel(PERSON_MODEL)
    private readonly kycAttachmentModel: Model<KycAttachmentDocument>,
    @InjectConnection() private readonly connection: mongoose.Connection,
  ) {}

  async create(createPeopleDto: CreatePeopleDto) {
    const personModel = new Person(); // map CreatePeopleDto to Person Model
    const createdPerson = new this.personModel(createPeopleDto);
    const person = await createdPerson.save();

    return person;
  }

  findAll() {
    return `This action returns all peoples`;
  }

  findOne(id: number) {
    return `This action returns a #${id} people`;
  }

  async update(id: number, updatePeopleDto: UpdatePeopleDto) {
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

  remove(id: number) {
    return `This action removes a #${id} people`;
  }
}
