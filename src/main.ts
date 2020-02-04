import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { getTranslations, ParsedTranslationBundle } from '@locl/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { loadTranslations } from '@angular/localize';

if (environment.production) {
  enableProdMode();
}


// loadTranslations({
//   '1611893922927246762': 'Translated!'
// });
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

const messages = '/assets/i18n/messages.de.json';

getTranslations(messages).then(
  (data: ParsedTranslationBundle) => {
    loadTranslations(data.translations);
    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .catch(err => console.error(err));
  }
);
