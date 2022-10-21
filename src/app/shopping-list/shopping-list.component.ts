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
    console.log('addingredient'+ ingredient);
    this.ingredients.push(ingredient);
  }

}
