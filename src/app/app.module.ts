import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {components} from './component';
import {DogStoreModule} from './store/dog-store.module';
import {FormsModule} from '@angular/forms';
import {TranslateLoader, TranslateModule, TranslateModuleConfig} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// i18n configuration
const translateConfig: TranslateModuleConfig = {
  defaultLanguage: 'es',
  loader: {
    provide: TranslateLoader,
    useFactory: (http: HttpClient) => new TranslateHttpLoader(http),
    deps: [HttpClient]
  },
  useDefaultLang: true
};

@NgModule({
  declarations: [
    AppComponent,
    ...components
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot(translateConfig),
    DogStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
