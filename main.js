const {app, BrowserWindow} = require('electron');

let mainWindow;
app.on('ready', () => {
  mainWindow = new BrowserWindow();
  mainWindow.loadURL(`file://${app.getAppPath()}/index.html`);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
