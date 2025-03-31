const { contextBridge } = require('electron');
const path = require('node:path');

contextBridge.exposeInMainWorld('assets', {
  getImagePath: () => path.join(__dirname, 'assets', 'background.png'),
});