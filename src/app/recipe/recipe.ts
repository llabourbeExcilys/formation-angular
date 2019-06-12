import {RecipeIngredient} from './recipe.ingredient';

export class Recipe {

  id: number;
  description: string;
  ingredients: RecipeIngredient[];
  instructions: string[];
  name: string;
  picture: string;

  constructor( name: string, picture: string, description: string, ingredients: RecipeIngredient[], instructions: string[]) {
    this.name = name;
    this.picture = picture;
    this.description = description;
    this.ingredients = ingredients;
    this.instructions = instructions;
  }

}
