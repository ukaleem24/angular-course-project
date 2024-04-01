import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe 1', 'This is simply test 1', 'https://www.recipetineats.com/wp-content/uploads/2024/02/Lemon-garlic-salmon-tray-bake_1.jpg?w=747&h=747&crop=1'),
    new Recipe('A test recipe 2', 'This is simply test 2', 'https://www.recipetineats.com/wp-content/uploads/2024/02/Lemon-garlic-salmon-tray-bake_1.jpg?w=747&h=747&crop=1')
  ];

  manageSelectedRecipe(event){
    this.recipeSelected.emit(event);
  }


  constructor() {
  }

  ngOnInit(): void {
  }


}

