import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('/country/:country')
  getCountryInfo(@Param('country') country) {
    return this.appService.getCountryInfo(country);
  }

  @Get('/country')
  getCountryList() {
    return this.appService.getCountryList();
  }


}
