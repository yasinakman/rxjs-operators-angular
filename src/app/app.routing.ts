import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorPageComponent} from './error-page/error-page.component';
import {SideNavComponent} from "./side-nav/side-nav.component";
/*import {RecipesResolverService} from './recipes/_resolver/recipes-resolver.service';*/

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},

  {
    path: 'home',
    component: ErrorPageComponent
  },

  {
    path: 'basic-operators',
    loadChildren: () => import('./basic-operators/basic-operators.module').then(m => m.BasicOperatorsModule)
  },

  {
    path: 'intermediate-operators',
    loadChildren: () => import('./intermediate-operators/intermediate-operators.module').then(m => m.IntermediateOperatorsModule)
  },

  {
    path: 'advanced-operators',
    loadChildren: () => import('./advanced-operators/advanced-operators.module').then(m => m.AdvancedOperatorsModule)
  },

  /*{path: 'not-found', component: PageNotFoundComponent}*/
  {path: 'not-found', component: ErrorPageComponent, data: {message: 'page Not Found!'}},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    /*RouterModule.forRoot(appRoutes, {useHash: true})*/ /*if on real server occurs an arror user this code blok*/
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting {

}
