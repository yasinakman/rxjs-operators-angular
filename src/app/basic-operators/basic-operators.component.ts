import {Component, OnInit} from '@angular/core';/*
import {RecipeService} from './_service/recipe.service';*/
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-basic-operators',
  templateUrl: './basic-operators.component.html',
  styleUrls: ['./basic-operators.component.css']
})
export class BasicOperatorsComponent implements OnInit {

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
