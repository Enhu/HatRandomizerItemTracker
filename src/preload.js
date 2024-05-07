const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    toggleFrameless: () => {
        ipcRenderer.send('toggle-frameless');
    },
    resetState: () => {
        ipcRenderer.send('reset-state');
    },
    updateTrackerState: (data) => {
        ipcRenderer.send('update-tracker-state', data);
    },
    send: (channel, data) => ipcRenderer.send(channel, data),
    on: (channel, func) => {
        ipcRenderer.on(channel, func);
    },
});