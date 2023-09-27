import { Module } from '@nestjs/common';
import { NoteRegistersController } from './note-registers.controller';
import { NoteRegistersService } from './note-registers.service';

@Module({
  controllers: [NoteRegistersController],
  providers: [NoteRegistersService],
})
export class NoteRegistersModule {}
