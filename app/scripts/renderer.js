const Cookbook = require('../function/cookbook.js')
const recipeMenu = require('./scripts/recipeMenu.js')
const docUtils = require('./scripts/documentUtils.js')
const navigation = require('./scripts/navigation.js')

const cookbook = new Cookbook();
const spinner = document.getElementById('loader')

cookbook.loadRecipes().then(() => {
    recipeMenu.createRecipeMenu(cookbook)
    docUtils.hideElement(spinner)

}).then(() => {
    navigation.initialiseNavBar()
})


