const Cookbook = require('../function/cookbook.js')
const recipeMenu = require('./scripts/recipeMenu.js')
const docUtils = require('./scripts/documentUtils.js')

const cookbook = new Cookbook();
const spinner = document.getElementById('loader')
const navBar = document.getElementById('nav-bar')

cookbook.loadRecipes().then(() => {
    cookbook.recipes.forEach(recipe => {
        recipeMenu.createRecipeMenu(recipe)
    })
    docUtils.hideElement(spinner)
})

