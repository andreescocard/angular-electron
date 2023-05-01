const {app, BrowserWindow} = require('electron');  
const url = require('url');
const path = require('path');   
	
function onReady () {     
	win = new BrowserWindow({fullscreen :true, autoHideMenuBar: true})    
	win.loadURL(url.format({      
		pathname: path.join(
			__dirname,
			'dist/projetoflash/index.html'),       
		protocol: 'file:',      
		slashes: true     
	}))   
} 

app.on('ready', onReady);