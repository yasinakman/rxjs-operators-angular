import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BasicOperatorsComponent} from "./basic-operators.component";
import {RangeComponent} from "./range/range.component";
import {OfComponent} from "./of/of.component";
import {FromComponent} from "./from/from.component";
import {StartWithComponent} from "./start-with/start-with.component";
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
      {path: 'of', component: OfComponent},
      {path: 'from', component: FromComponent},
      {path: 'start-with', component: StartWithComponent}/*,
      {path: 'new', component: OperatorsEditComponent},
      {path: ':id', component: OperatorsDetailComponent},
      {path: ':id/edit', component: OperatorsEditComponent}*/
    ]
  },
  {path: '**', redirectTo: '/not-found'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BasicOperatorsRouting {
}

