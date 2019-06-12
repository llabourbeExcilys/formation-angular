import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from './recipe';
import {ServiceRecipeService} from '../service-recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})


export class RecipeComponent implements OnInit {

  @Input()
  recipe: Recipe;

  @Output()
  delete = new EventEmitter<void>();

  visible = true;

  constructor(private service: ServiceRecipeService) { }

  ngOnInit() {
    this.service.getRecipe(this.recipe.id.toString()).subscribe(result => console.log(result.name));
  }

  toggleVisibility() {
    this.visible = !this.visible;
  }



}
