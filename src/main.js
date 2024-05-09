const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');
const createTcpServer = require('./server/tcpServer');
const { processData } = require('./autoTracker/autoTracker');
const trackingData = require('./autoTracker/trackingData');

const PORT = 34053;
const WINDOW_DEFAULTS = {
    width: 275,
    height: 840,
    alwaysOnTop: true,
    webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
    },
};

let win = null;
let isFrameless = false;

function createWindow() {
    const windowOptions = {
        ...WINDOW_DEFAULTS,
        transparent: isFrameless,
        frame: !isFrameless,
    };

    if (win) {
        const { width, height, x, y } = win.getBounds();
        windowOptions.width = width;
        windowOptions.height = height;
        windowOptions.x = x;
        windowOptions.y = y;
        win.close();
    }

    win = new BrowserWindow(windowOptions);

    const isDevelopment = process.env.NODE_ENV === 'development';

    if (isDevelopment) {
        win.webContents.openDevTools();
    } else {
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
            const message = data.toString();

            if (message === 'newGame') {
                trackingData.resetState();
                win.webContents.send('auto-tracker-data', trackingData.state);
            } else {
                const processedData = processData(message);
                win.webContents.send('auto-tracker-data', processedData);
            }
        });

        socket.on('error', (err) => {
            console.error('TCP server error:', err);
        });
    });
}

app.whenReady().then(() => {
    createWindow();
    startTcpServer();
});

ipcMain.on('toggle-frameless', () => {
    isFrameless = !isFrameless;
    createWindow();
});

ipcMain.on('reset-state', () => {
    trackingData.resetState();
    win.webContents.send('auto-tracker-data', trackingData.state);
});

ipcMain.on('update-tracker-state', (event, data) => {
    const processedData = processData(data.toString());
    win.webContents.send('auto-tracker-data', processedData);
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});