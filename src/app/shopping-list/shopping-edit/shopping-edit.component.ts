import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import {FormBuilder,  Validators} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Input() ingredient!:  Ingredient;
  @Output() addEvent = new EventEmitter<Ingredient>();
  @Output() deleteEvent = new EventEmitter<Ingredient>();

  editForm = this.formBuilder.group({
    name: [null],
    amount: [null]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.clearData();
  }

  clearData(){
    this.ingredient = new Ingredient(null,null);
  }

  addNew(): void {    
    const ingredient = this.editForm.value;   
    this.addEvent.emit(new Ingredient(ingredient.name, ingredient.amount));    
    this.editForm.reset();
  }

  clear(){
    const ingredient = this.editForm.value;   
    console.log('clear' + ingredient.name);
    this.editForm.reset();
    
  }

  delete(){
    // if(!this.editForm.valid){
    //   return;
    // }
    this.editForm.reset();
    this.deleteEvent.emit();
  }
}
