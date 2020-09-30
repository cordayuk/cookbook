const recipeHandler = require('./recipes')

class Cookbook {

    constructor() {
    }

    get areRecipesLoaded() {
        return !(this.recipes === undefined)
    }

    async loadRecipes() {
        return await recipeHandler.getRecipes().then( (recipes) => {
            this.recipes = recipes
            return Promise.resolve()
        }).catch( err => {
            console.error( 'Problem loading recipes! ', err)
        })
    }
}

module.exports = Cookbook


