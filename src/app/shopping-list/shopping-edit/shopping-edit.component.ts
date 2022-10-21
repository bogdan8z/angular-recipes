import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Input() ingredient!:  Ingredient;
  @Output() addEvent = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
    this.ingredient = new Ingredient('',0);
  }

  addNew(name: string, amount: number): void {
    console.log('add2'+name);
    this.addEvent.emit(new Ingredient(name, amount));    
  }

}
