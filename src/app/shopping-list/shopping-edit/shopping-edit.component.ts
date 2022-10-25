import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import {FormBuilder,  FormGroup,  Validators} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Input() ingredientForm : FormGroup;
  @Output() addEvent = new EventEmitter<Ingredient>();
  @Output() deleteEvent = new EventEmitter<Ingredient>();

 
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.clearData();
    // this.editForm = this.formBuilder.group({
    //   name: [null],
    //   amount: [null]
    // });

    
    // this.ingredientForm.addControl(
    //   'child',
    //   new FormGroup(this.editForm.controls);
    // );
  }

  clearData(){
    //this.ingredient = new Ingredient(null,null);
  }

  addNew(): void {    
    const ingredient = this.ingredientForm.value;   
    this.addEvent.emit(ingredient as Ingredient);    
    this.ingredientForm.reset();
  }

  clear(){
    // const ingredient = this.editForm.value;   
    // console.log('clear' + ingredient.name);
    // this.editForm.reset();    
    this.ingredientForm.reset();
  }

  delete(){
    var ing =  this.ingredientForm.value;
    this.ingredientForm.reset();
    this.deleteEvent.emit(ing as Ingredient);
  }
}
