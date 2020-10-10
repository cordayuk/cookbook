const Cookbook = require('../function/cookbook.js')
const recipeMenu = require('./scripts/recipeMenu.js')

const cookbook = new Cookbook();


function removeSpinner() {
    let spinner = document.getElementById("loader")
    if (spinner !== undefined) {
        spinner.parentNode.removeChild(spinner)
    }
}

cookbook.loadRecipes().then(() => {
    cookbook.recipes.forEach(recipe => {
        recipeMenu.createRecipeMenu(recipe)
    })
    removeSpinner()
})

