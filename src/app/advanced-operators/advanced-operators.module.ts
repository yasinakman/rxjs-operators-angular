import {NgModule} from '@angular/core';
import {AdvancedOperatorsRouting} from "./advanced-operators.routing";/*
import {OperatorsListComponent} from "./operators-list/operators-list.component";
import {OperatorsEditComponent} from "./operators-edit/operators-edit.component";
import {OperatorsDetailComponent} from "./operators-detail/operators-detail.component";*/
import {AdvancedOperatorsComponent} from "./advanced-operators.component";
import {AdvancedOperatorsNavBarComponent} from "./advanced-operators-nav-bar/advanced-operators-nav-bar.component";
import {RetryWhenComponent} from "./retry-when/retry-when.component";
import {RetryWhenService} from "./_service/retry-when.service";

@NgModule({
  declarations: [
    AdvancedOperatorsComponent,
    AdvancedOperatorsNavBarComponent,
    RetryWhenComponent,/*,
    OperatorsListComponent,
    OperatorsEditComponent,
    OperatorsDetailComponent*/
  ],
  imports: [
    AdvancedOperatorsRouting
  ],
  providers: [RetryWhenService]
})
export class AdvancedOperatorsModule {
}
