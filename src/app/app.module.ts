import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {HeaderComponent} from "./_header/header.component";
import {AppRouting} from "./app.routing";
import {DropdownDirective} from "./shared/dropdown-directive";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import {OperatorsStartComponent} from "./operators-start/operators-start.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatRadioModule} from "@angular/material/radio";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {TabBasicComponent} from "./_tab-basic/tab-basic.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    HeaderComponent,
    TabBasicComponent,
    DropdownDirective,
    OperatorsStartComponent
  ],
  imports: [
    AppRouting,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSidenavModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
