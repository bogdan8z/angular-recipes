import { Component } from '@angular/core';
import { NavItem } from './nav-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showPage: number = NavItem.Recipe;

  public get NavItem() {
    return NavItem; 
  }

  changePage(page: number){
      this.showPage = page;
  }
}