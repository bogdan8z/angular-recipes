import { Component, OnInit } from '@angular/core';
import { NavItem } from '../nav-item';

@Component({
  selector: 'app-start-without-routes',
  templateUrl: './start-without-routes.component.html',
  styleUrls: ['./start-without-routes.component.css']
})
export class StartWithoutRoutesComponent {
  showPage: number = NavItem.Recipe;

  public get NavItem() {
    return NavItem; 
  }

  changePage(page: number){
      this.showPage = page;
  }

}
