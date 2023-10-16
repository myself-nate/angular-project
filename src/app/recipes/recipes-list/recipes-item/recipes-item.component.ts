import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css'],
})
export class RecipesItemComponent {
  @Input() recipe: Recipe;
  @Output() selectedRecipe = new EventEmitter<void>();

  onClick() {
    this.selectedRecipe.emit();
  }
}
