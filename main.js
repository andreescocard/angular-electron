const {ipcMain, app, BrowserWindow} = require('electron');  
const url = require('url');
const path = require('path');   
	
function onReady () {     
	win = new BrowserWindow({
        fullscreen :true, 
        autoHideMenuBar: true,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
          }
    })    
	win.loadURL(url.format({      
		pathname: path.join(
			__dirname,
			'dist/projetoflash/index.html'),       
		protocol: 'file:',      
		slashes: true     
	}))   
} 

ipcMain.on('close', () => {
    app.quit();
  });

app.on('ready', onReady);