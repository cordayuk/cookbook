const {app, BrowserWindow} = require('electron');
const {ipcMain} = require('electron')
const {ipcRenderer} = require('electron')
const recipeHandler = require('./function/recipes')

let win

function createWindow() {
    win = new BrowserWindow({
        width: 800, height: 600, webPreferences: {
            nodeIntegration: true,
            webSecurity: true
        }
    })
    win.loadFile('./app/index.html').catch(err => {
        console.log(err)
        return Promise.reject(err)
    })

    win.webContents.openDevTools()
    return Promise.resolve(win)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})