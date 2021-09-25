import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdvancedOperatorsComponent} from "./advanced-operators.component";/*
import {OperatorsEditComponent} from "./operators-edit/operators-edit.component";
import {OperatorsDetailComponent} from "./operators-detail/operators-detail.component";*/

const routes: Routes = [
  {
    path: '',
    component: AdvancedOperatorsComponent,/*
    resolve: [RecipesResolverService],*/
    children: [/*
      {path: '', component: OperatorsStartComponent},
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
export class AdvancedOperatorsRouting {
}

