const navigation = require('./navigation.js')
const documentUtils = require('./documentUtils.js')

const menuContainer = documentUtils.getRecipeMenuElement()

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
    createRecipeMenu: createRecipeMenuItem,
}