import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IntermediateOperatorsComponent} from "./intermediate-operators.component";
import {SwitchMapComponent} from "./swtich-map/switch-map.component";
import {MergeMapComponent} from "./merge-map/merge-map.component";

const routes: Routes = [
  {
    path: '',
    component: IntermediateOperatorsComponent,
    children: [
      {path: 'switch-map', component: SwitchMapComponent},
      {path: 'merge-map', component: MergeMapComponent}
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

