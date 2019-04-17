import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as Excel from '@grapecity/spread-excelio';
import * as GC from '@grapecity/spread-sheets';
import 'hammerjs';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment.dev';
GC.Spread.Sheets.LicenseKey = Excel.LicenseKey =
"10.128.40.241|10.128.40.242|20.128.25.250|20.128.25.251|20.128.25.252|10.128.30.252,128761725868288#A0GJRproto/avozJukzqukfJjlLiOiEmTDJCLigDOygjN8UjM7EjN7gjMxIiOiQWSiwSflNHbhZmOiI7ckJye0ICbuFkI1pjIEJCLi4TPnplSLdnS8N5aD5EVwI6VvJTesNzb9kHeoZjQzcDeFFTMU5mW554cVJ4c9J6ap94LUlkMWBVc6FVSBR6aGRGTVF7KONXOzIlMC3marElU4oURn5kW4glI0IyUiwyMyUzNwYDOzUTM0IicfJye&Qf35VfiMjY6cmI0IyQiwiIxEjL6ByUKBCZhVmcwNlI0IiTis7W0ICZyBlIsISN4cDM4ADIxEjNwgTMwIjI0ICdyNkIsIiM5IjLwMjL8ITMuATMsITNy8SNy8COyEjLwIDLxUjMuUjMugjMx8CMywCM5IjL5IjL8ITMuAjMsIDNy8CM48COyEjLwEDLxQjMuADNugjMx8CMxIiOiMXbEJCLig1jlzahlDZmpnInm/KnmDoimb1ukVa/o";
if (environment.production) {
  enableProdMode()
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err))
