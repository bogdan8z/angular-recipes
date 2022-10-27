import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './header/header.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StartWithRoutesComponent } from './start-with-routes/start-with-routes.component';
import { StartWithoutRoutesComponent } from './start-without-routes/start-without-routes.component';
import { Header2Component } from './header2/header2.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeListComponent,    
    HeaderComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesComponent,
    StartWithRoutesComponent,
    StartWithoutRoutesComponent,
    Header2Component,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
