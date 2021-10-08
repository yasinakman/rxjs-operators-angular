import {NgModule} from '@angular/core';
import {BasicOperatorsRouting} from "./basic-operators.routing";
import {BasicOperatorsComponent} from "./basic-operators.component";
import {MatTabsModule} from "@angular/material/tabs";
import { RangeComponent } from './range/range.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {CommonModule} from "@angular/common";
import {BasicOperatorsNavBarComponent} from "./basic-operators-nav-bar/basic-operators-nav-bar.component";
import {OfComponent} from "./of/of.component";
import {SideNavComponent} from "../side-nav/side-nav.component";
import {ReactiveFormsModule} from "@angular/forms";
import {FromComponent} from "./from/from.component";
import {StartWithComponent} from "./start-with/start-with.component";

@NgModule({
  declarations: [
    BasicOperatorsComponent,
    RangeComponent,
    OfComponent,
    FromComponent,
    StartWithComponent,
    SideNavComponent,
    BasicOperatorsNavBarComponent
  ],
    imports: [
        BasicOperatorsRouting,
        MatTabsModule,
        MatSidenavModule,
        CommonModule,
        ReactiveFormsModule
    ],
  providers: []
})
export class BasicOperatorsModule {
}
