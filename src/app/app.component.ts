import { Component } from '@angular/core';
import * as Bowser from 'bowser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    const browser = Bowser.getParser(window.navigator.userAgent);
    const isValidBrowser = browser.satisfies({
      chrome: '>80.1.1432',
      firefox: '>70'
    });

    // Filtorwanie przeglądarek
    if (
      browser.getBrowserName() === 'Microsoft Edge' ||
      browser.getBrowserName() === 'Internet Explorer' ||
      browser.getBrowserName() === 'Opera'
    ) {
      alert('Przeglądarka ' + browser.getBrowserName() + ' nie jest wspierana przez system.');
    } else if (!isValidBrowser) {
      // tslint:disable-next-line: max-line-length
      alert('Wersja przeglądarki ' + browser.getBrowserName() + ' jest za stara, aby obsłużyć system. \nProszę zaktualizuj swoją przeglądarkę lub skontaktuj się z działem IT.');
    }
  }
}
