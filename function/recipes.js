const fs = require('fs')
const directory = './recipes/'

/**
 * Method to load all json files (assumption being they are all recipes) from the ./recipes/ directory and parse them into JSON.
 * @returns {Promise<any[]>} Which contains array of all recipes loaded as JSON.
 */
async function loadRecipes( ) {
    return await fs.promises.readdir(directory)
        .then( files => {
            console.log( files)
            return Promise.all( files.map(async file => await fs.promises.readFile(directory + file)))
        } )
        .then( recipes => {
            return recipes.map( recipe => JSON.parse( recipe ) )
        }).catch( err => {
            console.log( err + " Problem loading recipes")
            return Promise.reject()
        })
}

module.exports = {
    getRecipes : loadRecipes,
}






