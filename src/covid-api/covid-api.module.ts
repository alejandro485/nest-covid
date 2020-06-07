import { Module } from '@nestjs/common';
import { GeneralRequestService } from './general-request/general-request.service';
import { CountryRequestService } from './country-request/country-request.service';

@Module({
  providers: [ CountryRequestService, GeneralRequestService ],
  exports: [ CountryRequestService, GeneralRequestService ]
})
export class CovidApiModule {}
