import { Test, TestingModule } from '@nestjs/testing';
import { NoteRegistersController } from './note-registers.controller';
import { NoteRegistersService } from './note-registers.service';

describe('NoteRegistersController', () => {
  let controller: NoteRegistersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NoteRegistersController],
      providers: [NoteRegistersService],
    }).compile();

    controller = module.get<NoteRegistersController>(NoteRegistersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
