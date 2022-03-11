import { Test, TestingModule } from '@nestjs/testing';
import { PolyController } from './poly.controller';

describe('PolyController', () => {
  let controller: PolyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PolyController],
    }).compile();

    controller = module.get<PolyController>(PolyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
