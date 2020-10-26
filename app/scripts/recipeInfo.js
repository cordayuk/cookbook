const contentContainer = document.getElementById('main-content')

/**
 * Creates and adds the recipe information elements to the main content.
 * @param recipe - the recipe to produce the recipe information pages for.
 */
function viewRecipeInfo(recipe) {

    let recipeContainer = document.createElement('div')
    recipeContainer.className = 'recipe-info-container'

    let upperContainer = createRecipeUpperContainer(recipe)
    let lowerContainer = createRecipeLowerContainer(recipe)

    recipeContainer.append(upperContainer, lowerContainer)

    contentContainer.appendChild(recipeContainer)
}

/**
 * Creates the lower container of the recipe information page.
 * @param recipe - the recipe to populate the method and ingredients from.
 * @returns {HTMLDivElement} - div element with classname recipe-lower-container
 */
function createRecipeLowerContainer(recipe) {
    let ingredientsContainer = createIngredientsContainer(recipe)

    let methodContainer = createMethodContainer(recipe)

    let lowerContainer = document.createElement('div')
    lowerContainer.className = 'recipe-lower-container'

    lowerContainer.append(ingredientsContainer, methodContainer)

    return lowerContainer
}

/**
 * Creates the upper container of the recipe information page.
 * @param recipe - The recipe to create the upper container for.
 * @returns {HTMLDivElement} - div element with classname of recipe-upper-container
 */
function createRecipeUpperContainer(recipe) {
    let header = document.createElement("h2")
    header.className = 'recipe-title'
    header.textContent = recipe.name

    let upperLeft = document.createElement('div')
    upperLeft.className = 'recipe-upper-left'

    let image = document.createElement('img')
    image.className = 'recipe-image'
    image.src = recipe.imagePath

    let upperRight = document.createElement('div')
    upperRight.className = 'recipe-upper-right'

    let servings = document.createElement('span')
    servings.className = 'servings'
    servings.textContent = `Servings: ${recipe.servings}`

    let cookingTime = document.createElement('span')
    cookingTime.className = 'cooking-time'
    cookingTime.textContent = `Cooking Time: ${recipe.cookingTime}`

    upperLeft.append(image)
    upperRight.append(header, cookingTime, servings)

    let upperContainer = document.createElement('div')
    upperContainer.className = 'recipe-upper-container'

    upperContainer.append(upperLeft, upperRight)

    return upperContainer
}

/**
 * Populates and creates the method section of a recipe and returns a div container element.
 * @param recipe - the recipe extract the method from.
 * @returns {HTMLDivElement} div with classname method-container.
 */
function createMethodContainer(recipe) {
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
    return methodContainer
}

/**
 * Creates and populates the ingredients container for the inputed recipe.
 * @param recipe - the recipe to extract the ingredients from.
 * @returns {HTMLDivElement} - a div with classname ingredients-container
 */
function createIngredientsContainer(recipe) {
    let ingredientsContainer = document.createElement('div')
    ingredientsContainer.className = 'ingredients-container'

    let ingredientsTitle = document.createElement('h3')
    ingredientsTitle.textContent = 'Ingredients:'

    let ingredientsList = document.createElement('ul')

    recipe.ingredients.forEach(ingredient => {
        let ingredientItem = document.createElement('li')
        ingredientItem.textContent = ingredient

        ingredientsList.appendChild(ingredientItem)
    })

    ingredientsContainer.append(ingredientsTitle, ingredientsList)

    return ingredientsContainer
}

module.exports = {
    viewRecipeInfo
}