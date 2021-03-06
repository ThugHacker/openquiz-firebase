import "bootstrap/dist/js/bootstrap.js"
import "bootstrap-material-design/dist/js/material.js";
import "bootstrap-material-design/dist/js/ripples.js";

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
