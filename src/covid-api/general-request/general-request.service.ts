import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GeneralRequestService {

    public async getCountryList() {
        try {
            const result = await axios.get(process.env.COVID19_API + '/countries');
            return result.data;
        } catch (err) {
            console.log('GeneralRequestService - getCountryList err: ', err);
            throw new Error('No se puede consultar la lista de paises');
        }
    }

}
