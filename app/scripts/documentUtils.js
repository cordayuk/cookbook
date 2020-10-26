/**
 * Shows or hide element based on whether it is visible or not. If visible element will be hidden. If element is hidden it will displayed.
 * @param id - if of element you want to hide or display.
 */
function showHideElementById(id) {
    if (typeof id === 'string') {
        let element = document.getElementById(id)

        if (element.style.display === "none") {
            element.style.display = "block"
        } else {
            element.style.display = "none"
        }
    } else {
        throw new Error("Id was not a String")
    }
}

module.exports = {
    showHideElementById
}
