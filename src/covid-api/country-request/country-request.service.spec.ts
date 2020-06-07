import { Test, TestingModule } from '@nestjs/testing';
import { CountryRequestService } from './country-request.service';

describe('CountryRequestService', () => {
  let service: CountryRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountryRequestService],
    }).compile();

    service = module.get<CountryRequestService>(CountryRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
