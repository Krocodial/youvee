// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { enableProdMode } from '@angular/core';
import { AppModule } from "./app/app.module";

//import * as application from "tns-core-modules/application";
//import { CustomAppDelegate } from "./custom-app-delegate";
//application.ios.delegate = CustomAppDelegate;

enableProdMode();
platformNativeScriptDynamic().bootstrapModule(AppModule);
