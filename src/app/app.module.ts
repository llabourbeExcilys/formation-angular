import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {CustomMaterialModule} from './custom-material/custom-material.module';
import { RecipeComponent } from './recipe/recipe.component';
import { HttpClientModule} from '@angular/common/http';
import { RecipesComponentComponent } from './recipes-component/recipes-component.component';
import {AppRoutingModule} from './app-routing.module';
import { DetailComponent } from './detail/detail.component';
import { FormRecipeComponent } from './form-recipe/form-recipe.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipesComponentComponent,
    DetailComponent,
    FormRecipeComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
