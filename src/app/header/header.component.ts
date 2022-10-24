import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {NavItem} from '../nav-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() onMenuClick = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onShoppingList(){
    console.log('shop list');
    this.onMenuClick.emit(NavItem.ShoppingList);
  }

  onRecipes(){
    console.log('recipes');
    this.onMenuClick.emit(NavItem.Recipe);
  }
}
