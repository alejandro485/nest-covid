import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CountryRequestService {

    public async getCountryStatus(countrySlug: string) {
        try {
            const result = await axios.get(process.env.COVID19_API + '/country/' + countrySlug);
            return result.data;
        } catch(err) {
            throw new Error('No se puede consultar el estado del pais ' + countrySlug);
        }
    }

}
