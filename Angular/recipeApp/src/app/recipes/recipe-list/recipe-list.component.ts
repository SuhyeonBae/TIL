import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('Salad', 'Salad Test Description', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/beetroot_halloumi_salad-e828cae.jpg?quality=90&resize=500%2C454'),
    new Recipe('Curry', 'Curry Test Description', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/113777-0b21d44.jpg?quality=90&resize=960,872'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
