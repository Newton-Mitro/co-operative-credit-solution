import { Test, TestingModule } from '@nestjs/testing';
import { NoteRegistersService } from './note-registers.service';

describe('NoteRegistersService', () => {
  let service: NoteRegistersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoteRegistersService],
    }).compile();

    service = module.get<NoteRegistersService>(NoteRegistersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
