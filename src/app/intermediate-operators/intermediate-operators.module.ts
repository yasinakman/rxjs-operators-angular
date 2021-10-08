import {NgModule} from '@angular/core';
import {IntermediateOperatorsRouting} from "./intermediate-operators.routing";
import {IntermediateOperatorsComponent} from "./intermediate-operators.component";
import {IntermediateOperatorsNavBarComponent} from "./intermediate-operators-nav-bar/intermediate-operators-nav-bar.component";
import {SwitchMapComponent} from "./swtich-map/switch-map.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MergeAndConcatMapComponent} from "./merge-map/merge-and-concat-map.component";

@NgModule({
  declarations: [
    SwitchMapComponent,
    MergeAndConcatMapComponent,
    IntermediateOperatorsComponent,
    IntermediateOperatorsNavBarComponent
  ],
  imports: [
    IntermediateOperatorsRouting,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class IntermediateOperatorsModule {
}
