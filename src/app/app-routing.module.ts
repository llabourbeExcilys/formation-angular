import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {RecipesComponentComponent} from './recipes-component/recipes-component.component';
import {DetailComponent} from './detail/detail.component';
import {FormRecipeComponent} from './form-recipe/form-recipe.component';


const routes: Routes = [
  {
    path: 'recipes/add',
    component: FormRecipeComponent,
    pathMatch: 'full'
  },
  {
    path: 'recipes/:id',
    component: DetailComponent,
    pathMatch: 'full'
  },
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
