import { Injectable } from '@nestjs/common';
import { CountryRequestService } from './covid-api/country-request/country-request.service';
import { GeneralRequestService } from './covid-api/general-request/general-request.service';

@Injectable()
export class AppService {

  constructor(
    private countryRequestService: CountryRequestService,
    private generalRequestService: GeneralRequestService,
  ) { }
  
  public getHello(): string {
    return 'Hello World!';
  }

  public async getCountryList() {
    try {
      const originalList: any[] = await this.generalRequestService.getCountryList();
      const processedList = originalList.map((item) => {
        return {
          nombre: item.Country,
          slug: item.Slug,
        };
      });
      return {
        status: true,
        data: processedList,
      };
    } catch(err) {
      return {
        status: false,
        err: err.message,
      };
    }
  }

  public async getCountryInfo(country: string) {
    try {
      const originalList: any[] = await this.countryRequestService.getCountryStatus(country);
      const processedList = [];
      originalList.forEach((item) => {
        console.log('item: ', item);
        if ( item.Confirmed > 0 || item.Deaths > 0 || item.Recovered > 0 || item.Active > 0) {
          processedList.push({
            confirmados: item.Confirmed,
            muertos: item.Deaths,
            recuperados: item.Recovered,
            activos: item.Active,
            fecha: item.Date,
          });
        }
      });
      const dataPerSample = [];
      dataPerSample.push(processedList[0]);
      for (let i=1; i < processedList.length; i++) {
        const item = processedList[i];
        const preItem = processedList[i-1];
        console.log('preItem: ', preItem);
        dataPerSample.push({
          confirmados: item.confirmados - preItem.confirmados,
          muertos: item.muertos - preItem.muertos,
          recuperados: item.recuperados - preItem.recuperados,
          activos: item.activos - preItem.activos,
          fecha: item.fecha,
        });
      }
      const lastItem = processedList[processedList.length - 1];
      const countryInfo = {
        nombre: originalList[0].Country,
        codigo: originalList[0].CountryCode,
        confirmados: lastItem.confirmados,
        muertos: lastItem.muertos,
        recuperados: lastItem.recuperados,
        activos: lastItem.activos,
        ultima_fecha: lastItem.fecha,
        variacion_datos: dataPerSample,
        acumulacion_datos: processedList,
      };
      return {
        status: true,
        data: countryInfo,
      };
    } catch(err) {
      return {
        status: false,
        err: err.message,
      };
    }
  }

}
