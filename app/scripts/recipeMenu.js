const recipeInfo = require('./recipeInfo.js')

function createRecipeMenu(recipe) {
    // Creates div to hold recipe image and name. Sets up click event listener to handle loading recipe details.
    let div = document.createElement("div")
    div.className = 'recipe'
    div.addEventListener("click", () => {
        hideRecipeMenu()
        recipeInfo.viewRecipeInfo(recipe)
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

    document.getElementById("menu-container").appendChild(div)
}

function hideRecipeMenu() {
    let recipeMenu = document.getElementById('menu-container')
    if (recipeMenu.style.display !== "none") {
        recipeMenu.style.display = "none";
    }
}

function showRecipeMenu() {
    let recipeMenu = document.getElementById('menu-container')
    if (recipeMenu.style.display === "none") {
        recipeMenu.style.display = "block";
    }
}

module.exports = {
    createRecipeMenu: createRecipeMenu,
    hideRecipeMenu: hideRecipeMenu,
    showRecipeMenu: showRecipeMenu

}