import {NgModule} from '@angular/core';
import {IntermediateOperatorsRouting} from "./intermediate-operators.routing";
import {IntermediateOperatorsComponent} from "./intermediate-operators.component";

@NgModule({
  declarations: [
    IntermediateOperatorsComponent
  ],
  imports: [
    IntermediateOperatorsRouting
  ],
  providers: []
})
export class IntermediateOperatorsModule {
}
