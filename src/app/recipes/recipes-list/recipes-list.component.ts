import { Component, OnInit } from '@angular/core';
import {RecipeObj} from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: RecipeObj[] = [
    new RecipeObj('testRecipe','a simple test', 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg?quality=90&webp=true&resize=600,545'),
    new RecipeObj('testRecipe','a simple test', 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg?quality=90&webp=true&resize=600,545')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
