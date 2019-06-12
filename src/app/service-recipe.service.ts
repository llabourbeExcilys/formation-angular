import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Recipe} from './recipe/recipe';
import {HttpClient} from '@angular/common/http';
import {Ingredient} from './recipe/ingredient';

@Injectable({
  providedIn: 'root'
})

export class ServiceRecipeService {

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('http://10.0.1.64:8080/api/v1/recipes');
  }
  getRecipe(id: string): Observable<Recipe> {
    return this.http.get<Recipe>('http://10.0.1.64:8080/api/v1/recipes/' + id);
  }

  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>('http://10.0.1.64:8080/api/v1/ingredients');
  }

  addRecipe(recipe: Recipe): Observable<any> {
    return this.http.post( 'http://10.0.1.64:8080/api/v1/recipes', recipe );
  }

  deleteRecipe(id: number): Observable<any> {
    return this.http.delete( 'http://10.0.1.64:8080/api/v1/recipes/' + id);
  }
}
