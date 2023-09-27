import { Injectable } from '@nestjs/common';
import { CreateDeedOfAgreementDto } from './dto/create-deed-of-agreement.dto';
import { UpdateDeedOfAgreementDto } from './dto/update-deed-of-agreement.dto';

@Injectable()
export class DeedOfAgreementsService {
  create(createDeedOfAgreementDto: CreateDeedOfAgreementDto) {
    return 'This action adds a new deedOfAgreement';
  }

  findAll() {
    return `This action returns all deedOfAgreements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deedOfAgreement`;
  }

  update(id: number, updateDeedOfAgreementDto: UpdateDeedOfAgreementDto) {
    return `This action updates a #${id} deedOfAgreement`;
  }

  remove(id: number) {
    return `This action removes a #${id} deedOfAgreement`;
  }
}
