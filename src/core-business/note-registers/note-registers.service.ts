import { Injectable } from '@nestjs/common';
import { CreateNoteRegisterDto } from './dto/create-note-register.dto';
import { UpdateNoteRegisterDto } from './dto/update-note-register.dto';

@Injectable()
export class NoteRegistersService {
  create(createNoteRegisterDto: CreateNoteRegisterDto) {
    return 'This action adds a new noteRegister';
  }

  findAll() {
    return `This action returns all noteRegisters`;
  }

  findOne(id: number) {
    return `This action returns a #${id} noteRegister`;
  }

  update(id: number, updateNoteRegisterDto: UpdateNoteRegisterDto) {
    return `This action updates a #${id} noteRegister`;
  }

  remove(id: number) {
    return `This action removes a #${id} noteRegister`;
  }
}
