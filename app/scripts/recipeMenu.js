const navigation = require('./navigation.js')
const documentUtils = require('./documentUtils.js')

const menuContainer = documentUtils.getRecipeMenuElement()
const pageNumber = document.getElementById('page-number')
const pageNumberText = document.getElementById('page-number-text')

let recipes
let numberOfPages
let currentPage = 1
let recipesPerPage = 15

function createRecipeMenu(cookbook) {
    recipes = cookbook.recipes
    console.log(cookbook.recipes)
    numberOfPages = Math.ceil((recipes.length / recipesPerPage))

    createRecipeMenuPage()

    if (numberOfPages > 1) {
        let scrollLeft = document.getElementById('scroll-left-button')
        let scrollRight = document.getElementById('scroll-right-button')

        documentUtils.showElement(scrollLeft)
        documentUtils.showElement(scrollRight)

        scrollLeft.addEventListener('click', gotoPreviousPage)
        scrollRight.addEventListener('click', gotoNextPage)

        pageNumberText.textContent = `Page: ${currentPage} of ${numberOfPages}`
        documentUtils.showElement(pageNumber)
    }
}

function createRecipeMenuPage() {
    for (let i = (currentPage - 1) * recipesPerPage; i < (currentPage * recipesPerPage) && i < recipes.length; i++) {
        createRecipeMenuItem(recipes[i])
    }
}

function removeRecipeItemElements() {
    let recipeElements = document.getElementsByClassName('recipe')
    while (recipeElements[0]) {
        recipeElements[0].parentNode.removeChild(recipeElements[0])
    }
}

function gotoNextPage() {
    if (currentPage === numberOfPages) {
        currentPage = 1
        console.log('Wrapping')
    } else {
        currentPage = currentPage + 1
    }

    removeRecipeItemElements()
    createRecipeMenuPage()
    updatePageNumber()
}

function gotoPreviousPage() {
    if (currentPage === 1) {
        currentPage = numberOfPages
    } else {
        currentPage = currentPage - 1
    }

    removeRecipeItemElements()
    createRecipeMenuPage()
    updatePageNumber()
}

function updatePageNumber() {
    if (numberOfPages > 1) {
        pageNumberText.textContent = `Page: ${currentPage} of ${numberOfPages}`
    }
}

/**
 * Creates the menu item for the input recipe.
 * @param recipe the recipe to create the menu item for
 */
function createRecipeMenuItem(recipe) {
    // Creates div to hold recipe image and name. Sets up click event listener to handle loading recipe details.
    let div = document.createElement("div")
    div.className = 'recipe'
    div.addEventListener("click", () => {
        navigation.navigateToRecipeInformation(recipe)
    }, false)

    // Create image of recipe element
    let recipeImg = document.createElement("img")
    recipeImg.className = 'recipeImgMenu'
    recipeImg.alt = recipe.name
    recipeImg.src = recipe.imagePath

    // Create item label
    let recipeLabel = document.createElement("span")
    recipeLabel.className = 'recipeLabelMenu'
    let recipeText = document.createTextNode(recipe.name)
    recipeLabel.appendChild(recipeText)

    div.appendChild(recipeImg)
    div.appendChild(recipeLabel)

    menuContainer.appendChild(div)
}

module.exports = {
    createRecipeMenu,
    currentPage,
    numberOfPages
}