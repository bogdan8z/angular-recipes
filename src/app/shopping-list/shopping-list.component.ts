import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  selectedIngredient!: Ingredient | undefined;
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Oranges',2)
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(ingredient: Ingredient){    
    
    const idx = this.ingredients.findIndex(ing => ing.amount === this.selectedIngredient.amount && ing.name === this.selectedIngredient.name);
    console.log('addingredient'+ idx);
    this.ingredients.push(ingredient);
  }

  onSelect(ingredient: Ingredient){
    this.selectedIngredient = ingredient;    
    console.log('onselect'+ingredient.name);
  }

  deleteIngredient(){    
    if(!this.selectedIngredient){
      return;
    }

    const idx = this.ingredients.findIndex(ing => ing.amount === this.selectedIngredient.amount && ing.name === this.selectedIngredient.name);
    this.ingredients.splice(idx, 1);
    this.selectedIngredient = undefined;
  }

}
