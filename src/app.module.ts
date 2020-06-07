import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CovidApiModule } from './covid-api';

@Module({
  imports: [ CovidApiModule ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {}
