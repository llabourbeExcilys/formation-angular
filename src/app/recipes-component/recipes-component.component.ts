import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe/recipe';
import {ServiceRecipeService} from '../service-recipe.service';

@Component({
  selector: 'app-recipes-component',
  templateUrl: './recipes-component.component.html',
  styleUrls: ['./recipes-component.component.scss']
})
export class RecipesComponentComponent implements OnInit {
  title = 'formation';
  recipes: Recipe[];

  constructor(private serviceRecipeService: ServiceRecipeService) { }

  ngOnInit(): void {
    this.serviceRecipeService.getRecipes().subscribe(result => this.recipes = result);
  }

}
