const recipeInfo = require('./recipeInfo.js')
const documentUtils = require('./documentUtils.js')

const menuButton = document.getElementById('menu-icon')
const backButton = document.getElementById('back-icon')
const forwardButton = document.getElementById('forward-icon')
const sideMenuCloseButton = document.getElementById('sideMenuClose')
const scrollLeftButton = document.getElementById('scroll-left')
const scrollRightButton = document.getElementById('scroll-right')

// Page Types
const menuPageType = "MENU";
const recipePageType = "RECIPE";
const addRecipePageType = "RECIPE_ADD"
const editRecipePageType = "RECIPE_EDIT"

let lastViewedRecipe;
let currentPageType = "Menu";

/**
 * Navigates to the recipe information page and stores the recipe as the last viewed recipe.
 * @param recipe the recipe to view the information for.
 */
function navigateToRecipeInformation(recipe) {
    //Hide menu
    documentUtils.hideElement(documentUtils.getRecipeMenuElement())
    hideScrollButtons()
    // update last viewed recipe to current recipe
    lastViewedRecipe = recipe
    // Build recipe information page elements
    recipeInfo.viewRecipeInfo(recipe)
    // Display back button to navigate back to the recipe menu.
    documentUtils.showElement(backButton)
    // Hide forward button
    documentUtils.hideElement(forwardButton)
    // Set Current page to recipe
    currentPageType = recipePageType
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
    showScrollButtons()
    // Display forward button if last recipe viewed is set.
    if (lastViewedRecipe) {
        documentUtils.showElement(forwardButton)
    }
    // Set Page Type to Menu
    currentPageType = menuPageType;
}

/**
 * Method to navigate to the last view recipe information page. This will hide the recipe menu and recreate the
 * last viewed recipe information page.
 */
function returnToLastViewedRecipe() {
    documentUtils.hideElement(documentUtils.getRecipeMenuElement())
    recipeInfo.viewRecipeInfo(lastViewedRecipe)
    documentUtils.hideElement(forwardButton)
    hideScrollButtons()
    currentPageType = recipePageType
}

/**
 * Initialises the navigation bar. Sets event listeners and hide appropriate icons.
 */
function initialiseNavBar() {
    // set event listeners for buttons.
    menuButton.addEventListener('click', () => {
        openSideMenu()
    })

    backButton.addEventListener('click', () => {
        returnToRecipeMenu()
    })

    forwardButton.addEventListener('click', () => {
        returnToLastViewedRecipe()
    })

    sideMenuCloseButton.addEventListener('click', () => {
        closeSideMenu()
    })

    // Hide Forward and back buttons as on recipe menu
    documentUtils.hideElement(backButton)
    documentUtils.hideElement(forwardButton)
}

/**
 * returns the current viewed page type. For example if the user is on the menu section
 * then it will return the Menu page type.
 * @returns {string} the current viewed page type
 */
function getCurrentPageType() {
    return currentPageType;
}

/* Set the width of the side navigation to 250px */
function openSideMenu() {
    document.getElementById("side-menu").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeSideMenu() {
    document.getElementById("side-menu").style.width = "0";
}

function showScrollButtons() {
    documentUtils.showElement(scrollLeftButton)
    documentUtils.showElement(scrollRightButton)
}

function hideScrollButtons() {
    documentUtils.hideElement(scrollRightButton)
    documentUtils.hideElement(scrollLeftButton)
}

module.exports = {
    navigateToRecipeInformation,
    returnToLastViewedRecipe,
    returnToRecipeMenu,
    initialiseNavBar,
    getCurrentPageType,
    showScrollButtons,
    hideScrollButtons
}