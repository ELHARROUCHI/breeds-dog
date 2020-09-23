import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'dog-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private readonly translate: TranslateService) {
  }

  onChangeLanguage($event): void {
    this.translate.use($event.target.value);
  }
}
