const { app, BrowserWindow, Menu } = require('electron')

const createWindow = () => {
    Menu.setApplicationMenu(null);

    const win = new BrowserWindow({
        width: 340,
        height: 740,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true
        }
    })

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