import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ServiceRecipeService} from '../service-recipe.service';
import {Recipe} from '../recipe/recipe';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id: string;
  recipe: Recipe;

  constructor(private route: ActivatedRoute, private service: ServiceRecipeService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getRecipe(this.id).subscribe( result => this.recipe = result);
  }

}
