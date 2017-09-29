// Dependencies
const electron = require('electron');

const menuTemplate = require('./menu');

const {
    app,
    BrowserWindow,
    Menu,
    ipcMain: ipc
} = electron;

let mainWindow;

app.on('ready', _ => {
    // Create window
    mainWindow = new BrowserWindow({
        height: 800,
        width: 1024,
        resizable: true
    });

    // Load html file onto window
    mainWindow.loadURL(`file://${__dirname}/liri.html`);

    // Auto open devTools
    mainWindow.webContents.openDevTools();

    // When the mainWindow closes, remove the window
    mainWindow.on('closed', _ => {
        mainWindow = null;
    });

    // Build the menu
    const menuContents = Menu.buildFromTemplate(menuTemplate(mainWindow));

    // Set the menu as the application menu
    Menu.setApplicationMenu(menuContents)
})