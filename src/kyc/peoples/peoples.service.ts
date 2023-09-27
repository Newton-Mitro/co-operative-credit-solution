import { Injectable } from '@nestjs/common';
import { CreatePeopleDto } from './dto/create-people.dto';
import { UpdatePeopleDto } from './dto/update-people.dto';

@Injectable()
export class PeoplesService {
  create(createPeopleDto: CreatePeopleDto) {
    return 'This action adds a new people';
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
