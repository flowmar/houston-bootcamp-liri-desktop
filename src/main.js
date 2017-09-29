const electron = require('electron');

const {
    app,
    BrowserWindow,
    Menu
} = electron;

let mainWindow;

app.on('ready', _ => {
    mainWindow: new BrowserWindow({
        height: 800,
        width: 1024,
        resizable: true
    });

    mainWindow.loadURL(`file://${__dirname}/liri.html`);
})