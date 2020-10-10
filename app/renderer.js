const Cookbook = require('../function/cookbook.js')

const cookbook = new Cookbook();

function createBrowseRecipe(recipe) {
    // Creates div to hold recipe image and name. Sets up click event listener to handle loading recipe details.
    let div = document.createElement("div")
    div.className = 'recipe'
    div.addEventListener("click", function () {
        console.log(`${div.textContent} was clicked`)
    })

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


function removeSpinner() {
    let spinner = document.getElementById("loader")
    if (spinner !== undefined) {
        spinner.parentNode.removeChild(spinner)
    }
}

cookbook.loadRecipes().then(() => {
    cookbook.recipes.forEach(recipe => {
        createBrowseRecipe(recipe)
    })
    removeSpinner()
})

