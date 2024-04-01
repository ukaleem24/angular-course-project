import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {

  @Output() addNewIngredient = new EventEmitter<Ingredient>();
  name: string;
  amount: number;


  addIngredient(){
    this.addNewIngredient.emit(new Ingredient(this.name, this.amount));
  }

}
