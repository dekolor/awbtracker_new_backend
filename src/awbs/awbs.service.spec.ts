import { Test, TestingModule } from '@nestjs/testing';
import { AwbsService } from './awbs.service';

describe('AwbsService', () => {
  let service: AwbsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AwbsService],
    }).compile();

    service = module.get<AwbsService>(AwbsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
