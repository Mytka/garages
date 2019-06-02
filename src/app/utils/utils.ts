import {Garage} from '../garages/garage.model';

export class Utils {
    static SECONDS_IN_MINUTE = 60;
    static MILLISECONDS_IN_SECOND = 1000;

    static getMillisecondsWithMinutes(minutes: number): number {
        return minutes * this.SECONDS_IN_MINUTE * this.MILLISECONDS_IN_SECOND;
    }

    static mapGarages(data: object[]): Garage[] {
        const garages: Garage[] = [];

        for (const garage of data) {
            garages.push(new Garage(garage));
        }

        return garages;
    }
}