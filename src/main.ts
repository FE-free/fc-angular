/*
 * @Author: luohong
 * @Date: 2019-07-04 17:15:57
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-22 16:50:29
 * @Description: 
 * @email: 3300536651@qq.com
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as Excel from '@grapecity/spread-excelio';
import * as GC from '@grapecity/spread-sheets';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment.dev';
LicenseManager.setLicenseKey("Evaluation_License_Valid_Until_1_August_2018__MTUzMzA3ODAwMDAwMA==8c0b423295f5960e7d0f3cbb4292e068");
import { LicenseManager } from "ag-grid-enterprise";
LicenseManager.setLicenseKey("your license key");
GC.Spread.Sheets.LicenseKey = Excel.LicenseKey ="";
if (environment.production) {
  enableProdMode()
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err))
