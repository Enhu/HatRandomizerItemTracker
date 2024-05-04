const { app, BrowserWindow, Menu, ipcMain } = require('electron')
const path = require('path');

let win;
let isFrameless = false;

function createWindow() {
    if (win) {
        const { width, height, x, y } = win.getBounds();
        win.close();

        win = new BrowserWindow({
            width,
            height,
            x,
            y,
            transparent: isFrameless,
            frame: !isFrameless,
            alwaysOnTop: true,
            webPreferences: {
                preload: __dirname + '/preload.js',
            },
        });
    } else {
        win = new BrowserWindow({
            width: 275,
            height: 840,
            transparent: isFrameless,
            frame: !isFrameless,
            alwaysOnTop: true,
            webPreferences: {
                preload: __dirname + '/preload.js',
            },
        });
    }

    var environment = process.env.NODE_ENV
    var isDevelopment = environment === 'development'

    if (isDevelopment) {
        win.webContents.openDevTools()
    } else {
        //assume it's prod
        Menu.setApplicationMenu(null);
    }


    win.loadFile('index.html');

    win.webContents.once('did-finish-load', () => {
        const bgColor = isFrameless ? 'rgba(0, 0, 0, 0)' : 'gray';
        const textColor = isFrameless ? 'white' : 'black';
        win.webContents.send('set-background-color', bgColor, textColor);
    });

}

app.whenReady().then(() => {
    createWindow();
});

ipcMain.on('toggle-frameless', () => {
    isFrameless = !isFrameless;
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})