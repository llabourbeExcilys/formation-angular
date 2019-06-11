import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {RecipesComponentComponent} from './recipes-component/recipes-component.component';


const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponentComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'recipes',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ]
})

export class AppRoutingModule { }
