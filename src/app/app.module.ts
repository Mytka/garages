import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';
import {MatInputModule, MatSelectModule, MatIconModule, MatListModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {NgxLoadingModule} from 'ngx-loading';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GaragesComponent} from './garages/garages.component';
import {ListGaragesComponent} from './garages/list-garages/list-garages.component';
import {GarageInfoComponent} from './garages/garage-info/garage-info.component';
import {DataConfig} from './config/config';
import {GaragesService} from './garages/garages.service';


@NgModule({
    declarations: [
        AppComponent,
        GaragesComponent,
        ListGaragesComponent,
        GarageInfoComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AgmCoreModule.forRoot({
            apiKey: DataConfig.GOOGLE_MAP_API_KEY
        }),
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule,
        MatListModule,
        NgxLoadingModule.forRoot({})
    ],
    providers: [GaragesService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
