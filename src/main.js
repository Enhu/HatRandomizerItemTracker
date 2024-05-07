const { app, BrowserWindow, Menu, ipcMain } = require('electron')
const createTcpServer = require('./server/tcpServer');
const { processData } = require('./autoTracker/autoTracker');
const trackingData = require('./autoTracker/trackingData');

let win;
let isFrameless = false;

const PORT = 34053;

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
        win.webContents.send('auto-tracker-data', trackingData.state);
    });

}

function startTcpServer() {
    createTcpServer(PORT, (socket) => {
        socket.on('data', (data) => {
            win.webContents.send("auto-tracker-data", processData(data.toString()));
        });
    });
}

app.whenReady().then(() => {
    createWindow();
    startTcpServer();
    win.webContents.send('auto-tracker-data', trackingData.state);
});

//toggle between transparent/grey background
ipcMain.on('toggle-frameless', () => {
    isFrameless = !isFrameless;
    createWindow();
});

//reset everything back to 0
ipcMain.on('reset-state', () => {
    trackingData.resetState();
    win.webContents.send('auto-tracker-data', trackingData.state);
});

//this is to handle clicks in the app instead of auto tracking the data
ipcMain.on('update-tracker-state', (event, data) => {
    win.webContents.send("auto-tracker-data", processData(data.toString()));
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})