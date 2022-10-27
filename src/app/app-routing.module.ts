import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { StartWithRoutesComponent } from './start-with-routes/start-with-routes.component';
import { StartWithoutRoutesComponent } from './start-without-routes/start-without-routes.component';

const routes: Routes = [
  {
    path:'', component: StartWithoutRoutesComponent
  },
  {
    path: 'using-routes', component: StartWithRoutesComponent
  },
  {
    path:'shopping-list', component: ShoppingListComponent    
  },
  {
    path:'recipes', component: RecipesComponent    
  },
  {
    path: 'using-routes/recipes', component: RecipesComponent
  },
  {
    path: 'using-routes/shopping-list', component: ShoppingListComponent
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
