import {Component, OnInit} from '@angular/core';/*
import {RecipeService} from './_service/recipe.service';*/
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-intermediate-operators',
  templateUrl: './intermediate-operators.component.html',
  styleUrls: ['./intermediate-operators.component.css']
})
export class IntermediateOperatorsComponent implements OnInit {
  /*selectedRecipe: Recipe;*/
/*
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) {

  }*/

  ngOnInit(): void {
    /*
    this.selectedRecipe = this.recipeService.lastSelectedRecipe;*/
    console.log('recipes oninit');

    /*this.route.data.subscribe((data: Data) => {
      this.selectedRecipe = data['recipeDetail'];
      this.recipeService.lastSelectedRecipe = data['recipeDetail'];
    })*/
    /*
        this.recipeService.selectedRecipe.subscribe(recipe => {
          /!*console.log(recipe);*!/
          this.selectedRecipe = recipe;
          this.recipeService.lastSelectedRecipe = recipe;
        });

        this.route.params.subscribe(params => {
          let id = params['id'];
          if (id) {
            this.recipeService.emitRecipeById(id - 1);
          }
        });*/

    /*todo yasin, use resolver*/
  }
}
