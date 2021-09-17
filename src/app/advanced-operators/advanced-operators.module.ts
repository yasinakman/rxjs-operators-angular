import {NgModule} from '@angular/core';
import {AdvancedOperatorsRouting} from "./advanced-operators.routing";/*
import {OperatorsListComponent} from "./operators-list/operators-list.component";
import {OperatorsEditComponent} from "./operators-edit/operators-edit.component";
import {OperatorsDetailComponent} from "./operators-detail/operators-detail.component";*/
import {AdvancedOperatorsComponent} from "./advanced-operators.component";

@NgModule({
  declarations: [
    AdvancedOperatorsComponent/*,
    OperatorsListComponent,
    OperatorsEditComponent,
    OperatorsDetailComponent*/
  ],
  imports: [
    AdvancedOperatorsRouting
  ],
  providers: []
})
export class AdvancedOperatorsModule {
}
