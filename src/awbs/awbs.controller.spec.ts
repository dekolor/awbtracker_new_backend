import { Test, TestingModule } from '@nestjs/testing';
import { AwbsController } from './awbs.controller';

describe('AwbsController', () => {
  let controller: AwbsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AwbsController],
    }).compile();

    controller = module.get<AwbsController>(AwbsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
