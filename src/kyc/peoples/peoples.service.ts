import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePeopleDto } from './dto/create-people.dto';
import { UpdatePeopleDto } from './dto/update-people.dto';
import { PERSON_MODEL, PersonDocument } from './schemas/person.schema';

@Injectable()
export class PeoplesService {
  constructor(
    @InjectModel(PERSON_MODEL)
    private readonly personModel: Model<PersonDocument>,
  ) {}

  async create(createPeopleDto: CreatePeopleDto) {
    console.log(createPeopleDto);

    const createdPerson = await this.personModel.create(createPeopleDto);

    return createdPerson;
  }

  findAll() {
    return `This action returns all peoples`;
  }

  findOne(id: number) {
    return `This action returns a #${id} people`;
  }

  update(id: number, updatePeopleDto: UpdatePeopleDto) {
    return `This action updates a #${id} people`;
  }

  remove(id: number) {
    return `This action removes a #${id} people`;
  }
}
