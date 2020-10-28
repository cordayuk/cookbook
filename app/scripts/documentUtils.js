const recipeMenuId = 'menu-container'
const recipeInfoId = 'recipe-info-container'

/**
 * Changes the element display to 'flex' if it is set to 'none'
 * @param element - The element you wish to show.
 */
function showElement(element) {
    if (element.style.display === "none") {
        element.style.display = "flex"
    }
}

/**
 * Changes the element display to 'none' hiding the element.
 * @param element - the element you wish to hide.
 */
function hideElement(element) {
    if (element.style.display !== "none") {
        element.style.display = "none"
    }
}

/**
 * Method to retrieve the base element of the recipe menu.
 * @returns {HTMLElement|null} the base recipe menu element.
 */
function getRecipeMenuElement() {
    let recipeMenu = document.getElementById(recipeMenuId)

    return recipeMenu ? recipeMenu : null
}

/**
 * Method to return the ase element of the recipe information.
 * @returns {HTMLElement|null} The base recipe information element.
 */
function getRecipeInfoElement() {
    let recipeInfo = document.getElementById(recipeInfoId)

    return recipeInfo ? recipeInfo : null
}

module.exports = {
    showElement,
    hideElement,
    getRecipeInfoElement,
    getRecipeMenuElement
}
