import {Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';
import {flatMap} from 'rxjs/operators';

import {GaragesService} from '../garages.service';
import {Garage} from '../garage.model';
import {DataConfig} from '../../config/config';
import {Utils} from '../../utils/utils';

@Component({
    selector: 'app-list-garages',
    templateUrl: './list-garages.component.html',
    styleUrls: ['./list-garages.component.css']
})
export class ListGaragesComponent implements OnInit {
    garages: Garage[];
    loading: boolean;

    constructor(private garagesService: GaragesService) {
    }

    ngOnInit() {
        this.getDataGarages();
        // start auto update garages data
        this.autoUpdateData();
    }

    private autoUpdateData() {
        interval(Utils.getMillisecondsWithMinutes(DataConfig.TIME_TO_UPDATE_DATA_IN_MINUTES))
            .pipe(
                flatMap(() => {
                        this.loading = true;
                        return this.garagesService.getGarages();
                    }
                )
            )
            .subscribe((response: { features: object[] }) => {
                this.garages = Utils.mapGarages(response.features);
                this.loading = false;
            });

    }


    private getDataGarages(): void {
        this.loading = true;

        this.garagesService.getGarages()
            .subscribe((response: { features: object[] }) => {
                this.garages = Utils.mapGarages(response.features);
                this.loading = false;
            });
    }

}
