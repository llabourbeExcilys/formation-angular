import { Component } from '@angular/core';
import {MOCK_RECIPES} from './recipe/recipes.mock';
import {Recipe} from './recipe/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formation';
  recipes = MOCK_RECIPES;
}
