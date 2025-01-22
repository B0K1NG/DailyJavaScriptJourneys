/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
    if (remainingTime === 0) {
      return 'Lasagna is done.';
    } 
    else if (remainingTime === undefined || Number.isNaN(remainingTime)) {
      return 'You forgot to set the timer.';
    } 
    return 'Not done, please wait.';
  }
  
  export function preparationTime(layers, time=2) {
  
    let totalTime = layers.length * time;
  
    return totalTime;
  }
  
  export function quantities(layers) {
    let noodles = 0;
    let sauce = 0;
  
    for (let i = 0; i < layers.length; i++) {
      if (layers[i] === 'noodles') {
        noodles += 50;
      } else if (layers[i] === 'sauce') {
        sauce += 0.2;
      }
    }
    return {
    'noodles': noodles,
    'sauce': sauce
    };
  }
  
  export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1]);
  }
  
  export function scaleRecipe(recipe, portions) {
    let originalPortions = 2;
    
    let scalingFactor = portions / originalPortions;
  
    let adjustedRecipe = {};
    
    for (let ingredient in recipe) {
      adjustedRecipe[ingredient] = recipe[ingredient] * scalingFactor;
    }
    return adjustedRecipe;
  }