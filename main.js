const {app, BrowserWindow} = require('electron');
const { ipcMain } = require('electron')
const { ipcRenderer } = require('electron')
const recipeHandler = require('./function/recipes')

let win

function createWindow() {
    win = new BrowserWindow({width: 800, height: 600, webPreferences: {
            nodeIntegration: true,
            webSecurity: true
        }
    })
    win.loadFile( './pages/index.html')

    win.webContents.openDevTools()
    return Promise.resolve( win )
}

const pageLoaded = app.whenReady().then( createWindow )
const recipes = recipeHandler.getRecipes()

Promise.all([pageLoaded, recipes]).then( () => {
    recipes.then( list => {
        list.forEach( recipe => {
            console.log( recipe.name )
            console.log( "Sending data")
            win.webContents.on( 'did-finish-load', () => {
                win.webContents.send( 'recipe-data', recipe )
            })
        })
    }).catch( err => console.error( err ))
}).catch( err => console.error( err ) )

app.on('window-all-closed', () => {
    if( process.platform != 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if( BrowserWindow.getAllWindows().length === 0 )
    {
        createWindow()
    }
})