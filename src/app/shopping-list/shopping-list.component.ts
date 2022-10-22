import { Component, OnInit } from '@angular/core';
import {IngredientObj} from "../recipes/shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientObj[] = [
    new IngredientObj('Apples', 5),
    new IngredientObj('Tomato', 3),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
