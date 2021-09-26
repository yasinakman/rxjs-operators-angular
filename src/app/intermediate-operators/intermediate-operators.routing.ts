import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IntermediateOperatorsComponent} from "./intermediate-operators.component";
import {SwitchMapComponent} from "./swtich-map/switch-map.component";
import {MergeAndConcatMapComponent} from "./merge-map/merge-and-concat-map.component";

const routes: Routes = [
  {
    path: '',
    component: IntermediateOperatorsComponent,
    children: [
      {path: 'switch-map', component: SwitchMapComponent},
      {path: 'merge-map', component: MergeAndConcatMapComponent}
    ]
  },
  {path: '**', redirectTo: '/not-found'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class IntermediateOperatorsRouting {
}

