import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as Excel from '@grapecity/spread-excelio';
import * as GC from '@grapecity/spread-sheets';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment.dev';
GC.Spread.Sheets.LicenseKey = Excel.LicenseKey ="";
if (environment.production) {
  enableProdMode()
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err))
