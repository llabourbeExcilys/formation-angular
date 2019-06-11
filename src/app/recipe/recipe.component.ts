import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from './recipe';
import {ServiceRecipeService} from '../service-recipe.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})


export class RecipeComponent implements OnInit {

  @Input()
  recipe: Recipe;

  visible = true;

  constructor(private service: ServiceRecipeService, private router: Router) { }

  ngOnInit() {
    this.service.getRecipe(this.recipe.id.toString()).subscribe(result => console.log(result.name));
  }

  toggleVisibility() {
    this.visible = !this.visible;
  }


}
