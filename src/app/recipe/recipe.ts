import {RecipeIngredient} from './recipe.ingredient';

export class Recipe {

  id: number;
  name: string;
  picture: string;
  description: string;
  ingredients: RecipeIngredient[];
  instructions: string[];

}
