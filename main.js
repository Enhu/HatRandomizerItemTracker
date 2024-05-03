const { app, BrowserWindow, Menu, MenuItem } = require('electron')
const path = require('path');

const createWindow = () => {
    var environment = process.env.NODE_ENV
    var isDevelopment = environment === 'development'

    const win = new BrowserWindow({
        width: 340,
        height: 740,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js'),
        }
    })

    if (isDevelopment)
        win.webContents.openDevTools()


    const template = [
        {
            label: 'Background',
            submenu: [
                {
                    label: "Green",
                    type: 'checkbox',
                    checked: false,
                    click: menuItem => {
                        const color = menuItem.checked ? '#00ff00' : 'darkgray';
                        console.log(color)
                        win.webContents.send('change-background-color', color);
                    },
                }
            ]
        },
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})