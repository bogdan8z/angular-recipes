import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  constructor(private router: Router){}

  hasRoute(url: string): boolean{
    let aa = this.router.url.includes(url);
    console.log('aa'+aa);
    return aa;
  }
}