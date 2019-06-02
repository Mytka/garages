import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataConfig} from '../config/config';

@Injectable()
export class GaragesService {
    constructor(private http: HttpClient) {
    }

    getGarages() {
        return this.http.get(`${DataConfig.PARKING_GARAGE_API}?per_page=25`);
    }

    getGarage(id: string) {
        return this.http.get(`${DataConfig.PARKING_GARAGE_API}?cdk_id=${id}`);
    }
}