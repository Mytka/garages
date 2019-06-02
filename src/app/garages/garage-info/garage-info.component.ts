import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {interval} from 'rxjs';
import {flatMap} from 'rxjs/internal/operators';

import {Utils} from '../../utils/utils';
import {DataConfig} from '../../config/config';
import {GaragesService} from '../garages.service';
import {Garage} from '../garage.model';


@Component({
    selector: 'app-garage-info',
    templateUrl: './garage-info.component.html',
    styleUrls: ['./garage-info.component.css']
})
export class GarageInfoComponent implements OnInit {
    zoom: number = DataConfig.MAP_ZOOM;
    garage: Garage;
    garageID: string;
    loading: boolean;
    error: boolean;

    constructor(private route: ActivatedRoute,
                private location: Location,
                private garagesService: GaragesService) {
    }

    backClicked() {
        this.location.back();
    }

    ngOnInit() {
        // get garage id from route params
        this.route.paramMap.subscribe((routeParams: any) => {
            this.garageID = routeParams.params.id;
            this.getGarage(this.garageID);
        });
        // start auto update garages data
        this.autoUpdateData();
    }

    private autoUpdateData() {
        interval(Utils.getMillisecondsWithMinutes(DataConfig.TIME_TO_UPDATE_DATA_IN_MINUTES))
            .pipe(
                flatMap(() => {
                    this.loading = true;
                    this.error = false;

                    return this.garagesService.getGarage(this.garageID);
                })
            )
            .subscribe((response: { features: object[] }) => {
                this.garage = Utils.mapGarages(response.features)[0];
                this.loading = false;
            }, (error) => {
                this.error = true;
            });
    }

    private getGarage(id: string) {
        this.loading = true;
        this.error = false;

        this.garagesService.getGarage(id).subscribe((response: { features: object[] }) => {
            this.garage = Utils.mapGarages(response.features)[0];

            this.loading = false;
        }, (error) => {
            this.error = true;
        });
    }

}
