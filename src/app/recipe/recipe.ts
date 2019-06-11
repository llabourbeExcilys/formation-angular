import {RecipeIngredient} from './recipe.ingredient';

export class Recipe {

  name: string;
  picture: string;
  description: string;
  ingredients: RecipeIngredient[];
  instructions: string[];

}
