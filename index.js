const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

let win

function createWindow() {
    win = new BrowserWindow({width: 800, height: 600, webPreferences: {
            nodeIntegration: true,
            worldSafeExecuteJavaScript: true,
            webSecurity: true
        }
    })

    win.loadFile( 'index.html')

    win.webContents.openDevTools()
}

app.whenReady().then( createWindow )

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