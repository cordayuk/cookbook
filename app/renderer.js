const Cookbook = require('../function/cookbook.js')

const cookbook = new Cookbook();

cookbook.loadRecipes().then(() => {
    cookbook.recipes.forEach(recipe => {
        let tag = document.createElement("p");
        let text = document.createTextNode(recipe.name);
        tag.appendChild(text);
        let element = document.getElementsByTagName("BODY")[0];
        element.appendChild(tag);
    })
})
