import {NgModule} from '@angular/core';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {DefaultDataServiceConfig, EntityDataModule} from '@ngrx/data';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {environment} from '../../environments/environment';
import {entityMetadata} from './dog-store.meta';
import {reducer} from './dog.reducers';

// config service for @ngrx/data
const dataServiceConfig: DefaultDataServiceConfig = {
  root: environment.api,
  entityHttpResourceUrls: {
    Dog: {
      entityResourceUrl: '',
      collectionResourceUrl: `${environment.api}/breeds/list/all`
    }
  }
};

@NgModule({
  imports: [
    StoreModule.forRoot({state: reducer}, {}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({entityMetadata}),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [
    {
      provide: DefaultDataServiceConfig,
      useValue: dataServiceConfig
    }
  ]
})
export class DogStoreModule {
}
