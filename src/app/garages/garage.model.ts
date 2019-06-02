export class Garage {
    id: string;
    title: string;
    shortCapacity: number;
    freeSpaceShort: number;
    coordinates: { lng: number, lat: number };

    constructor(garage) {
        const garageData = garage.properties.layers['parking.garage'].data;

        this.id = garage.properties.cdk_id;
        this.title = garage.properties.title || '';
        this.shortCapacity = garageData.ShortCapacity || 0;
        this.freeSpaceShort = garageData.FreeSpaceShort || 0;
        this.coordinates = {
            lng: garage.geometry.coordinates[0] || '',
            lat: garage.geometry.coordinates[1] || ''
        };
    }
}

