const recipeInfo = require('./recipeInfo.js')
const documentUtils = require('./documentUtils.js')

const menuButton = document.getElementById('menu-icon')
const backButton = document.getElementById('back-icon')
const forwardButton = document.getElementById('forward-icon')

let lastViewedRecipe;

/**
 * Navigates to the recipe information page and stores the recipe as the last viewed recipe.
 * @param recipe the recipe to view the information for.
 */
function navigateToRecipeInformation(recipe) {
    //Hide menu
    documentUtils.hideElement(documentUtils.getRecipeMenuElement())
    // update last viewed recipe to current recipe
    lastViewedRecipe = recipe
    // Build recipe information page elements
    recipeInfo.viewRecipeInfo(recipe)
    // Display back button to navigate back to the recipe menu.
    documentUtils.showElement(backButton)
    // Hide forward button
    documentUtils.hideElement(forwardButton)

}

/**
 * Method to navigate back to the recipe menu page. This will remove any recipe information elements
 * present and make the menu visible.
 */
function returnToRecipeMenu() {
    // Remove recipe information elements
    documentUtils.getRecipeInfoElement().remove()
    // Reveal recipe menu.
    documentUtils.showElement(documentUtils.getRecipeMenuElement())
    // Display forward button if last recipe viewed is set.
    if (lastViewedRecipe) {
        documentUtils.showElement(forwardButton)
    }


}

/**
 * Method to navigate to the last view recipe information page. This will hide the recipe menu and recreate the
 * last viewed recipe information page.
 */
function returnToLastViewedRecipe() {
    documentUtils.hideElement(documentUtils.getRecipeMenuElement())
    recipeInfo.viewRecipeInfo(lastViewedRecipe)
    documentUtils.hideElement(forwardButton)
}

/**
 * Initialises the navigation bar. Sets event listeners and hide appropriate icons.
 */
function initialiseNavBar() {
    // set event listeners for buttons.
    menuButton.addEventListener('click', () => {
        console.log('Load menu')
    })

    backButton.addEventListener('click', () => {
        returnToRecipeMenu()
    })

    forwardButton.addEventListener('click', () => {
        returnToLastViewedRecipe()
    })

    // Hide Forward and back buttons as on recipe menu
    documentUtils.hideElement(backButton)
    documentUtils.hideElement(forwardButton)
}

module.exports = {
    navigateToRecipeInformation,
    returnToLastViewedRecipe,
    returnToRecipeMenu,
    initialiseNavBar
}