import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateNoteRegisterDto } from './dto/create-note-register.dto';
import { UpdateNoteRegisterDto } from './dto/update-note-register.dto';
import { NoteRegistersService } from './note-registers.service';

@Controller('note-registers')
export class NoteRegistersController {
  constructor(private readonly noteRegistersService: NoteRegistersService) {}

  @Post()
  create(@Body() createNoteRegisterDto: CreateNoteRegisterDto) {
    return this.noteRegistersService.create(createNoteRegisterDto);
  }

  @Get()
  findAll() {
    return this.noteRegistersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.noteRegistersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNoteRegisterDto: UpdateNoteRegisterDto,
  ) {
    return this.noteRegistersService.update(+id, updateNoteRegisterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.noteRegistersService.remove(+id);
  }
}
