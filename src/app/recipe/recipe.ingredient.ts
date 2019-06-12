import {Ingredient} from './ingredient';

export class RecipeIngredient {

  ingredient: Ingredient;
  quantity: number;
  unit: string;

  constructor( ingredient: Ingredient, quantity: number, unit: string) {
    this.ingredient = ingredient;
    this.quantity = quantity;
    this.unit = unit;
  }

}
