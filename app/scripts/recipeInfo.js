function viewRecipeInfo(recipe) {
    let recipeContainer = document.createElement('div')
    recipeContainer.className = 'recipe-info-container'

    let upperContainer = document.createElement('div')
    upperContainer.className = 'recipe-upper-container'

    let header = document.createElement("h2")
    header.className = 'recipe-title'
    header.textContent = recipe.name

    let image = document.createElement('img')
    image.src = recipe.imagePath

    let recipeAdditionalInfo = document.createElement('div')
    recipeAdditionalInfo.id = 'recipe-additional-info'

    let servings = document.createElement('span')
    servings.textContent = `Servings: ${recipe.servings}`

    let cookingTime = document.createElement('span')
    cookingTime.textContent = `Cooking Time: ${recipe.cookingTime}`

    let ingredientsContainer = document.createElement('div')
    ingredientsContainer.className = 'ingredients'

    let ingredientsTitle = document.createElement('h3')
    ingredientsTitle.textContent = 'Ingredients:'

    let ingredientsList = document.createElement('ul')

    recipe.ingredients.forEach(ingredient => {
        let ingredientItem = document.createElement('li')
        ingredientItem.textContent = ingredient

        ingredientsList.appendChild(ingredientItem)
    })

    ingredientsContainer.append(ingredientsTitle, ingredientsList)

    let methodContainer = document.createElement('div')
    methodContainer.className = 'method-container'

    let methodTitle = document.createElement('h3')
    methodTitle.textContent = 'Instructions:'

    let methodList = document.createElement('ol')

    recipe.method.forEach(methodStep => {
        let methodItem = document.createElement('li')
        methodItem.textContent = methodStep

        methodList.appendChild(methodItem)
    })

    methodContainer.append(methodTitle, methodList)

    upperContainer.append(header, image, servings, cookingTime, ingredientsContainer, methodContainer)

    let contentContainer = document.getElementById('main-content')

    contentContainer.appendChild(upperContainer)
}

module.exports = {
    viewRecipeInfo
}