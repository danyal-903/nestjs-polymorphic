import { Test, TestingModule } from '@nestjs/testing';
import { PolyService } from './poly.service';

describe('PolyService', () => {
  let service: PolyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PolyService],
    }).compile();

    service = module.get<PolyService>(PolyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
