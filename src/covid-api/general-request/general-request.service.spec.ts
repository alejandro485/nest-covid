import { Test, TestingModule } from '@nestjs/testing';
import { GeneralRequestService } from './general-request.service';

describe('GeneralRequestService', () => {
  let service: GeneralRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeneralRequestService],
    }).compile();

    service = module.get<GeneralRequestService>(GeneralRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
