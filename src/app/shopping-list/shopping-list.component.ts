import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  itemEditForm: FormGroup;
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Oranges',2)
  ];

  constructor(private fb: FormBuilder) { } 
  
  
  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.itemEditForm = this.fb.group({
      amount: [null, [Validators.required]],
      name: [null, [Validators.required]]
    });
    
  }

  addIngredient(ingredient: Ingredient){    
    const idx = this.ingredients.findIndex(ing => ing.amount === ingredient.amount && ing.name === ingredient.name);    
    if(idx>-1){
      return;
    }
    this.ingredients.push(ingredient);
  }

  onSelect(ingredient: Ingredient){
    this.itemEditForm.patchValue({name: ingredient.name, amount: ingredient.amount});
  }

  deleteIngredient(ingredient: Ingredient){    
    console.log('dellll'+ingredient.name);
    const idx = this.ingredients.findIndex(ing => ing.amount === ingredient.amount && ing.name === ingredient.name);
    this.ingredients.splice(idx, 1);
  }
}
