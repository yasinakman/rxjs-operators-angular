import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BasicOperatorsComponent} from "./basic-operators.component";
import {BasicOperatorsNavBarComponent} from "../basic-operators-nav-bar/basic-operators-nav-bar.component";
import {RangeComponent} from "./range/range.component";
import {OfComponent} from "./of/of.component";
/*
import {OperatorsEditComponent} from "./operators-edit/operators-edit.component";
import {OperatorsDetailComponent} from "./operators-detail/operators-detail.component";*/

const routes: Routes = [
  {
    path: '',
    component: BasicOperatorsComponent,/*
    resolve: [RecipesResolverService],*/
    children: [
      {path: 'range', component: RangeComponent},
      {path: 'of', component: OfComponent}/*,
      {path: 'new', component: OperatorsEditComponent},
      {path: ':id', component: OperatorsDetailComponent},
      {path: ':id/edit', component: OperatorsEditComponent}*/
    ]
  },
  {path: '**', redirectTo: 'template-list'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BasicOperatorsRouting {
}

