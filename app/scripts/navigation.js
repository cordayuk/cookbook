const recipeInfo = require('./recipeInfo.js')
const documentUtils = require('./documentUtils.js')

let lastViewedRecipe;

/**
 * Navigates to the recipe information page and stores the recipe as the last viewed recipe.
 * @param recipe the recipe to view the information for.
 */
function navigateToRecipeInformation(recipe) {
    documentUtils.hideElement(documentUtils.getRecipeMenuElement())
    lastViewedRecipe = recipe
    recipeInfo.viewRecipeInfo(recipe)
}

/**
 * Method to navigate back to the recipe menu page. This will remove any recipe information elements
 * present and make the menu visible.
 */
function returnToRecipeMenu() {
    documentUtils.getRecipeInfoElement().remove()
    documentUtils.showElement(documentUtils.getRecipeMenuElement())
}

/**
 * Method to navigate to the last view recipe information page. This will hide the recipe menu and recreate the
 * last viewed recipe information page.
 */
function returnToLastViewedRecipe() {
    documentUtils.hideElement(documentUtils.getRecipeMenuElement())
    recipeInfo.viewRecipeInfo(lastViewedRecipe)
}

function initialiseNavigationBar() {

}

module.exports = {
    navigateToRecipeInformation,
    returnToLastViewedRecipe,
    returnToRecipeMenu
}