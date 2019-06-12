import { Component, OnInit } from '@angular/core';
import {ServiceRecipeService} from '../service-recipe.service';
import {Ingredient} from '../recipe/ingredient';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-form-recipe',
  templateUrl: './form-recipe.component.html',
  styleUrls: ['./form-recipe.component.scss']
})
export class FormRecipeComponent implements OnInit {

  ingredients: Ingredient[];

  name: string;
  description: string;
  image: string;


  recipeForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    picture: new FormControl('')
  });

  constructor(private service: ServiceRecipeService) { }

  ngOnInit() {
    this.name = '';
    this.description = '';
    this.image = '';
    // this.service.getIngredients().subscribe(result => this.ingredients = result);
    // console.log(this.ingredients.toString());
  }

  addRecipe() {
    console.log('recipe:name:' + this.name + ',desc' + this.description + ',image:' + this.image);

    this.service.addRecipe(this.recipeForm.value).subscribe();
  }





}
